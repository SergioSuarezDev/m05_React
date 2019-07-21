import React, { Component } from 'react';
import {Card, Container, Segment, Input } from 'semantic-ui-react';
import Collection from "./Collection";
import Storage from '../Storage'



class Collections extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      valueForm: '',
      collections: {}
    };
  }

  
  componentWillMount(){
    this.setState({
      collections : Storage.loadCollections()
    }) 
  }

  
  render() {
    return (
      <Container>
        <Input ref="NewColl" onChange={this.onInputChange}  placeholder='Name.....' />
        <button onClick={this.addNewColl.bind(this)} className="ui button">Add New Coll</button>
        <Segment basic compact loading={this.state.isLoading}>
          <Card.Group>   
            {
              Object.entries(this.state.collections.Peliculas).map(([key, value]) => (
                  <Collection 
                  key={this.state.collections.Peliculas[key].Coleccion} 
                  colInfo={this.state.collections.Peliculas[key]}/>               
              ))
            }                        
          </Card.Group>
        </Segment>
      </Container>
    );
  }

  onInputChange = (e) => {
    this.state.valueForm = e.target.value;
}
  
addNewColl(){
  this.state.collections.Peliculas.push({Coleccion: this.state.valueForm, Pelis:[]})
  Storage.setCollections(this.state.collections);
  this.setState({ collections : this.state.collections}) 
}

}





export default Collections;

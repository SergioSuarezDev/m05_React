import React, { Component } from 'react';
import {Card, Container, Segment, Button } from 'semantic-ui-react';
import Collection from "./Collection";
import Storage from '../Storage'

class Collections extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      collections: {}
    };
  }

  componentWillMount(){
    Storage.initCollections()
    this.setState({
      collections : Storage.loadCollections()
    }) 
  }

  
  render() {

    return (
      <Container>
        <button onClick={this.addNewColl} className="ui button">Add New Coll</button>
        <Segment basic compact loading={this.state.isLoading}>
          <Card.Group>   
            {
              Object.entries(this.state.collections.Peliculas).map(([key, value]) => (
                  <Collection key={this.state.collections.Peliculas[key].Coleccion} 
                  colInfo={this.state.collections.Peliculas[key]}/>               
              ))
            }                        
          </Card.Group>
        </Segment>
      </Container>
    );
  }

addNewColl(){
  console.log("ADD NEW")
}

}

export default Collections;

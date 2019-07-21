import React, { Component } from 'react';
import { List, Button, Card } from 'semantic-ui-react';
import Storage from '../Storage'

class Collection extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      colInfo: {}
    };
  }

  render() {
    return (
    <Card>
      <Card.Content>
      <Card.Header>{this.props.colInfo.Coleccion}</Card.Header>
        <br/>
        <Card.Meta>Films added:</Card.Meta>        
        <Card.Description>
          <List>
            {
                Object.entries(this.props.colInfo.Pelis).map(([key, value]) => (
                    <List.Item key={this.props.colInfo.Pelis[key].Codigo} >{this.props.colInfo.Pelis[key].Titulo}</List.Item>
                ))
            }             
          </List>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={() => this.removeColl(this.props.colInfo.Coleccion)}
           basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
    );
  }

removeColl(coll){
  Storage.removeItemColl(coll)
}

}

export default Collection;
import React, { Component } from 'react';
import { List, Button, Card, Image, Container, Grid, Segment } from 'semantic-ui-react';

class Collections extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      colInfo: {}
    };


  }

  render() {
    console.log(this.props)
    return (
    <Card>
      <Card.Content>
      <Card.Header>{this.props.colInfo.uno}</Card.Header>
        <br/>
        <Card.Meta>Films added:</Card.Meta>        
        <Card.Description>
          <List>
            <List.Item>Peli1</List.Item>
            <List.Item>Peli2</List.Item>
            <List.Item>Peli3</List.Item>
          </List>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
    );
  }
}

export default Collections;
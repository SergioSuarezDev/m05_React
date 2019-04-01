import React, { Component } from 'react';
import { List, Button, Card, Image, Container, Grid, Segment } from 'semantic-ui-react';
import config from '../../config/config';
//import MovieDetail from "./MovieDetail";
//import MovieImg from "./MovieImg";

class Collections extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //id: this.props.match.params.id,
      isLoading: false,
      details: {}
    };

    this.getDetails//= this.getDetails.bind(this);
  }

  componentWillMount(){
    /*if (this.state.id) {
      this.getDetails();
    }*/
  }

  componentWillReceiveProps(nextProps) {
    /*if(this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({
        id: nextProps.match.params.id,
        isLoading: true,
        details: {}
      }, () => this.getDetails());
    }*/
  }

  getDetails() {
    this.setState({
      //details: response.data,
      isLoading: false
    });
   /* axios.get(`${config.api.apiUrl.movie}/${this.state.id}`, {
      params: {
        api_key: config.api.apiKey,
        language: config.api.language
      }
    })
      .then( response => {
        this.setState({
          details: response.data,
          isLoading: false
        });
      });*/
  }

  render() {
    console.log(this.state.isLoading)
    return (
      <Container>
        <Segment basic compact loading={this.state.isLoading}>
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Prueba de Coleccion</Card.Header>
        <Card.Description>
        <p>Peliculas:</p>
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
    </Card.Group>
        </Segment>
      </Container>
    );
  }
}

export default Collections;

import React, { Component } from 'react';
import { List, Button, Card, Image, Container, Grid, Segment } from 'semantic-ui-react';
import Collection from "./Collection";

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
  }

  render() {
    const colecciones = {
      "Peliculas": [{
          "Collecion": "PruebaCol9049",
          "Pelis": [{
              "Codigo": "05592",
              "Titulo": "Titulo 001"
            },
            {
              "Codigo": "05292",
              "Titulo": "Titulo 002"
            },
            {
              "Codigo": "03592",
              "Titulo": "Titulo 003"
            }
          ]
        },
        {
          "Collecion": "PruebaCol9049",
          "Pelis": [{
              "Codigo": "05592",
              "Titulo": "Titulo 001"
            },
            {
              "Codigo": "05292",
              "Titulo": "Titulo 002"
            },
            {
              "Codigo": "03592",
              "Titulo": "Titulo 003"
            }
          ]
        }
      ]
    }

    return (
      <Container>
        <Segment basic compact loading={this.state.isLoading}>
        <Card.Group>      

        <Collection colInfo={colecciones}/>
        
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

export default Collections;

import React, { Component } from 'react';
import {Card, Container, Segment } from 'semantic-ui-react';
import Collection from "./Collection";

class Collections extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //id: this.props.match.params.id,
      isLoading: false,
      details: {}
    };

    //this.getDetails//= this.getDetails.bind(this);

     this.colecciones = {
      "Peliculas": [{
          "Coleccion": "PruebaCol001",
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
          "Coleccion": "PruebaCol002",
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

    return (
      <Container>
        <Segment basic compact loading={this.state.isLoading}>
          <Card.Group>   
            {
              Object.entries(this.colecciones.Peliculas).map(([key, value]) => (
                  <Collection key={this.colecciones.Peliculas[key].Coleccion} 
                  colInfo={this.colecciones.Peliculas[key]}/>               
              ))
            }                        
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

export default Collections;

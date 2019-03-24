import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Segment } from 'semantic-ui-react';
import config from '../../config/config';
import MovieDetail from "./MovieDetail";
import MovieImg from "./MovieImg";

class Movie extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: this.props.match.params.id,
      isLoading: true,
      details: {}
    };

    this.getDetails= this.getDetails.bind(this);
  }

  componentWillMount(){
    if (this.state.id) {
      this.getDetails();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({
        id: nextProps.match.params.id,
        isLoading: true,
        details: {}
      }, () => this.getDetails());
    }
  }

  getDetails() {
    axios.get(`${config.api.apiUrl.movie}/${this.state.id}`, {
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
      });
  }

  render() {
    return (
      <Container>
        <Segment basic compact loading={this.state.isLoading}>
          <Grid columns='equal' centered>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={10} computer={10} largeScreen={3} widescreen={3}>
                <MovieImg poster_path={this.state.details.poster_path}/>
              </Grid.Column>
              <Grid.Column>
                <MovieDetail details={this.state.details}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Movie;

import React, { Component } from 'react';
import { Container, Loader, Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios/index';
import config from '../../config/config';
import List from '../List/List';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      results: null,
      page: 0,
      total_pages: 1,
      sort: 1
    };
    this.getDiscoverMovies = this.getDiscoverMovies.bind(this);
    this.getMoreDiscoverMovies = this.getMoreDiscoverMovies.bind(this);
  }

  componentDidMount(){
    this.getDiscoverMovies();
  }

  getDiscoverMovies() {
    axios.get(config.api.apiUrl.discover, {
      params: {
        api_key: config.api.apiKey,
        language: config.api.language
      }
    })
      .then( response => {
        this.setState({
          results: response.data.results,
          isLoading: false,
          page: response.data.page,
          total_results: response.data.total_results,
          total_pages: response.data.total_pages
        });
      });
  }

  getMoreDiscoverMovies() {
    if (this.state.page < this.state.total_pages) {
      axios.get(config.api.apiUrl.discover, {
        params: {
          api_key: config.api.apiKey,
          language: config.api.language,
          page: this.state.page + 1
        }
      })
        .then( response => {
          let results = this.state.results.concat(response.data.results);
          this.setState({
            results: results,
            page: response.data.page,
            total_results: response.data.total_results,
            total_pages: response.data.total_pages
          });
        });
    }
  }

  render() {
      return (
        <InfiniteScroll
          pageStart={0} next={this.getMoreDiscoverMovies}
          hasMore={true} loader={<Loader />}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>All Loaded</b>
            </p>
          }>
        <Container>
          <Segment basic loading={this.state.isLoading}>
            <List results={this.state.results}/>
          </Segment>
        </Container>
        </InfiniteScroll>
      )
  }
}

export default Home;

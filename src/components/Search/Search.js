import React, { Component } from 'react';
import { Container, Loader, Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios/index';
import config from '../../config/config';
import List from '../List/List';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.match.params.query,
      isLoading: true,
      results: null,
      page: 0,
      total_pages: 1,
      sort: 1
    };
    this.getResults = this.getResults.bind(this);
    this.getMoreResults = this.getMoreResults.bind(this);
  }

  componentDidMount(){
    if (this.state.query) {
      this.getResults();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.query !== nextProps.match.params.query) {
      this.setState({
        query: nextProps.match.params.query,
        isLoading: true,
        results: null,
        page: 0,
        total_pages: 1,
        sort: 1
      }, () => this.getResults());
    }
  }

  getResults() {
    axios.get(config.api.apiUrl.search, {
      params: {
        query: this.state.query,
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

  getMoreResults() {
    if (this.state.page < this.state.total_pages) {
      axios.get(config.api.apiUrl.search, {
        params: {
          query: this.props.match.params.query,
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
          pageStart={0}
          next={this.getMoreResults}
          hasMore={true}
          loader={<Loader />}
        >
        <Container>
          <Segment basic loading={this.state.isLoading}>
            <List results={this.state.results}/>
          </Segment>
        </Container>
        </InfiniteScroll>
      )
  }
}

export default Search;

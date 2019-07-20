import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Search } from 'semantic-ui-react';
import axios from 'axios';
import debounce from 'lodash/debounce'
import config from '../../config';

const resultRenderer = ({ image, title, description, movie }) => <Link to={'/movie/' + movie}>
  {image && <div key='image' className='image'><Image src={image} rounded/></div>}
    <div key='content' className='content'>
      {title && <div className='title'>{title}</div>}
      {description && <div className='description'>{description}</div>}
    </div>
  </Link>;

class SearchB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      results: [],
      query: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchMovies = debounce(this.searchMovies.bind(this), 1000);
  }

  handleResultSelect(e, { result }){
    this.setState({
      query: result.title
    });
  }

  handleSearchChange(e, { value }) {
    this.setState({
      isLoading: true,
      results: [],
      query: value
    });
    this.searchMovies();
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  searchMovies() {
    if (this.state.query) {
      axios.get(config.api.apiUrl.search, {
        params: {
          api_key: config.api.apiKey,
          language: config.api.language,
          query: this.state.query
        }
      })
        .then(response => {
          this.setState({
            isLoading: false,
            results: response.data.results.map((item) => ({
              movie: item.id,
              title: item.title,
              description: item.original_title,
              image: item.poster_path ? 'https://image.tmdb.org/t/p/w92' + item.poster_path : config.no_photo,
              price: item.original_language.toUpperCase()
            }))
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid container columns={'3'} >
        <Grid.Column>
          <form onKeyPress={this.handleSubmit}>
            <Search
              fluid input={{
                fluid: false
              }}
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              resultRenderer={resultRenderer}
              results={results}
              showNoResults={false}
              value={value}
              size={'mini'}
              {...this.props}
            />
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}


export default SearchB;

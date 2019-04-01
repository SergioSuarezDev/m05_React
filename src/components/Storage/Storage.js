import React, { Component } from 'react';


localStorage.setItem('discoverResults', JSON.stringify([]));
localStorage.setItem('searchResults', JSON.stringify([]));
localStorage.setItem('collections', JSON.stringify([{id : 0, name : 'Prueba', movies : colPrueba}]));
localStorage.setItem('ratings', JSON.stringify(RatingsPrueba));

class Storage extends Component {
    constructor(props, context) {
      super(props, context);
     /* this.state = {
        query: this.props.match.params.query,
        isLoading: true,
        results: null,
        page: 0,
        total_pages: 1,
        sort: 1
      };
      this.getResults = this.getResults.bind(this);
      this.getMoreResults = this.getMoreResults.bind(this);*/
    }
  
    componentDidMount(){
      /*if (this.state.query) {
        this.getResults();
      }*/
    }
  
    componentWillReceiveProps(nextProps) {

    }

  
   
  
    render() {
        return (
          <br/>
        )
    }
  }
  
  export default Storage;
  
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import config from '../../config/config';
import Header from '../Header/Header';
import Init from '../Init/Init';
import Search from '../Search/Search';
import Movie from '../Movie/Movie';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFilm, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faFilm, faFolder);

class App extends Component {
  render() {
    return (
      <Router basename={config.base}>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Init}/>
            <Route path="/searchURL/:query" component={Search}/>
            <Route path="/movie/:id" component={Movie}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Init from '../Init';
import Search from '../Search';
import Movie from '../Movie';
import Collections from '../Collections';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFilm, faFolder } from '@fortawesome/free-solid-svg-icons';
import Storage from '../Storage'

library.add(faFilm, faFolder);
Storage.loadCollections()

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Init}/>
            <Route exact path="/searchURL/:query" component={Search}/>
            <Route exact path="/movie/:id" component={Movie}/>
            <Route exact path="/collections/" component={Collections}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;

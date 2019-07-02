import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import Dashboard from '../Dashboard/Dashboard';
import InfoPage from '../InfoPage/InfoPage';

import './App.css';
import SingleTrailPage from '../SingleTrailPage/SingleTrailPage';
import confirmHikePage from '../ConfirmHikePage/ConfirmHikePage';
import HikeHistoryPage from '../HikeHistoryPage/HikeHistoryPage';;

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" /> 
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={Dashboard}
            />
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
             <Route exact
            path="/confirm" component={confirmHikePage} />
          <Route exact
            path="/detail" component={SingleTrailPage} />
              <Route exact
            path="/history" component={HikeHistoryPage} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);

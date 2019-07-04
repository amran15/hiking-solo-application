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

import Dashboard from '../Dashboard/Dashboard';
import InfoPage from '../InfoPage/InfoPage';

import './App.css';
import confirmHikePage from '../ConfirmHikePage/ConfirmHikePage';
import HikeHistoryPage from '../HikeHistoryPage/HikeHistoryPage';
import ReviewHikePage from '../ReviewHikePage/ReviewHikePage';
import SingleTrailPage from '../SingleTrailPage/SingleTrailPage';

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
             <ProtectedRoute exact
            path="/confirm" component={confirmHikePage} />
                 <ProtectedRoute exact
            path="/history" component={HikeHistoryPage} />
             <ProtectedRoute exact
            path="/review" component={ReviewHikePage} />
          <ProtectedRoute exact
            path="/detail" component={SingleTrailPage} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);

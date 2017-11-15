import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Board from './Board';
import { connect } from "redux-zero/react";
import { Grid, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

const App = ({ information }) => {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route path="/portfoliomaria"
            render={() => <Redirect to={'/'} />} />
          <Route path="/login" render={() => <LogIn />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/board" render={() => <Board />} />
          <Route component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>)
}


const mapToProps = ({ information }) => ({ information });

export default connect(mapToProps)(App);
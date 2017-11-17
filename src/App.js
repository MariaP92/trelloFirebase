import React from 'react';
import Board from './Board';
import './App.css';
import { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { connect } from "redux-zero/react";
import { Grid, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

const App = ({stages, tasks}) => {
  return (
        <BrowserRouter>
          <div>
    
            <Switch>
              <Route path="/portfoliomaria"
                render={() => <Redirect to={'/'} />} />
              <Route path="/login" render={() => <LogIn />} />
              <Route path="/signup" render={() => <SignUp />} />
              <Route path="/board" render={() =>  <Board stages={stages}  tasks = {tasks}/>} />
              <Route component={LogIn} />
            </Switch>
          </div>
        </BrowserRouter>)

};
const mapToProps = ({stages, tasks})  => ({stages, tasks}) 

export default connect(mapToProps)(App);

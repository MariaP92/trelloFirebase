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

const App = ({stages, tasks,successLogin }) => {
  return (
        <BrowserRouter>
          <div>
    
            <Switch>
              <Route path="/login" render={() => <LogIn />} />
              <Route path="/signup" render={() => <SignUp />} />
              <Route path="/board" render={() =>  <Board stages={stages}  tasks = {tasks} successLogin ={successLogin } />} />
              <Route component={LogIn} />
            </Switch>
          </div>
        </BrowserRouter>)

};
const mapToProps = ({stages, tasks, successLogin })  => ({stages, tasks,successLogin }) 

export default connect(mapToProps)(App);

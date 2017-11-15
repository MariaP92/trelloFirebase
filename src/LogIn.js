import React, { Component } from 'react';
import './LogIn.css';
import Logo from './img/logo.png'
import SingUp from './SignUp'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';


const LogIn = () => {
    return (
        <div className="grid">
            <form className="form login">
                <div className="form__field">
                    <img src={Logo} className="logoImg"/>
                </div>
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-user" aria-hidden="true"></i><span class="hidden">Username</span></label>
                    <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required />
                </div>
                <div className="form__field">
                    <label for="login__password"><i class="fa fa-unlock-alt" aria-hidden="true"></i><span className="hidden">Password</span></label>
                    <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
                </div>
                <div align="center">
                    <NavLink to="/board"><input type="submit" value="Sign In" /></NavLink>
                </div>
            </form>
            <p className="text--center">Do not have an account? <NavLink to="/signup"><a>Sign up now</a></NavLink></p>
        </div>
    );
}

export default LogIn;
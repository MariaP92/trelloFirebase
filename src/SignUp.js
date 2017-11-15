import React, { Component } from 'react';
import './SignUp.css';
import Logo from './img/logo.png'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="grid">
            <form className="form login">
                <div className="form__field">
                    <img src={Logo} className="logoImg" />
                </div>
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-user" aria-hidden="true"></i><span class="hidden">Firstname</span></label>
                    <input type="text" name="username" className="form__input" placeholder="Username" required />
                </div>
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-user" aria-hidden="true"></i><span class="hidden">Lastname</span></label>
                    <input type="text" name="username" className="form__input" placeholder="Lastname" required />
                </div>
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="hidden">Email</span></label>
                    <input type="email" name="email" className="form__input" />
                </div>
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-unlock-alt" aria-hidden="true"></i><span class="hidden">Password</span></label>
                    <input type="password" name="password" className="form__input" placeholder="Password" required />
                </div>
                
                <div className="form__field">
                    <label for="login__username"><i class="fa fa-unlock-alt" aria-hidden="true"></i><span class="hidden">Confirm Password</span></label>
                    <input type="password" name="password" className="form__input" placeholder="Confirm Password" required />
                </div>
                <label><input type="checkbox" name="terms" /> I agree with the <a href="#">Terms and Conditions</a>.</label>
                <NavLink to="/board"><input type="submit" value="Sign up" class="btn btn-primary pull-right" /></NavLink>
                <div class="clearfix"></div>
            </form>
        </div>
    );
}

export default SignUp;
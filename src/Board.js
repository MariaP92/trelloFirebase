import React, { Component } from 'react';
import './Board.css';
import Logo from './img/logo.png'
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { addTask, addStage,readAllTasks, deleteTask } from "./actions";

const Header = () => {
    return (
        <div className="cabecera">
            <div className="mensaje">
                <img className="logoCabecera" src={Logo} />
            </div>
        </div>
    );
}

const Body = ({ addTask }) => {
    // const Body = () => {
    return (
        <div className="contenedor" id="contenedorGeneral">
            <div id="cajitas" className="d-inlineblock">
                <button id="btnAddList" onClick={(e) => { addTask(e) }} >Add List ...</button>
            </div>

        </div>
    );
}
const TaskAdd = ({ task, title }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(this.nameInputRef.value);
    }
    return (
        <div className="taskContainer2">
            <form onSubmit={onSubmit}>
                <input placeholder="Add a new list ..." value={title} ref={(e) => this.nameInputRef = e} />
                <button className="btn btn-circle text-uppercase" id="btnSave">Save</button>
                {/* <p className="text--center">or<a>Cancel</a></p> */}
                {/* <textarea value={task}></textarea> */}
            </form>
        </div>
    );
}
const Task = ({ task, title, id }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(this.nameInputRef.value);
    }
    return (
        <li>
            <form onSubmit={onSubmit}>
                <div className="taskContainer">
                    <h4>{title}</h4>
                    <textarea value={task} ref={(e) => this.nameInputRef = e}></textarea>
                    <button id="btnAdd"  >Add Task</button>
                    {/* <button onClick={() => deleteTask(id)}><a>Delete Taskt</a></button> */}
                </div>
            </form>
        </li>

    );
}

readAllTasks();

const Board = ({ cards }) => {


    const UserTask = cards.map((taskUser, index) => {
        return (
            <Task
                key={taskUser.id}
                task={taskUser.task}
                title={taskUser.title}
                id={taskUser.id}
            />
        );
    });
    return (
        <div>
            <Header />
            <div className="contenedor" id="contenedorGeneral">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addStage(this.stageInputRef.value);
                }}>
                    <input type="text" ref={e => this.stageInputRef = e} />
                    <button type="submit" id="btnAddList" >
                        save list
               </button>
                </form>

            </div>
        </div>
    );
}

const mapToProps = ({ cards }) => ({ cards });
export default connect(mapToProps)(Board);
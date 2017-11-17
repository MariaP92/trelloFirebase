import store from "./store";
import firebase from "firebase"

var config = {
    apiKey: "AIzaSyBZPDF1kdD28vCy--aZXHjK_VJcx2VU1uk",
    authDomain: "trello-c3837.firebaseapp.com",
    databaseURL: "https://trello-c3837.firebaseio.com",
    projectId: "trello-c3837",
    storageBucket: "trello-c3837.appspot.com",
    messagingSenderId: "828700090026"
};
firebase.initializeApp(config);

export function readBoard () {
    firebase.database().ref('stages').on ('value', res => {
       let stages = []
       res.forEach ( snap  => {
          const stage = snap.val();
          stages.push (stage);
       })
       store.setState ({
          stages : stages
       }) 
    });
 
    firebase.database().ref('tasks').on ('value', res => {
       let tasks = [];
       res.forEach ( snap  => {
           const task = snap.val();
           tasks.push (task)
       })      
       store.setState ({
          tasks : tasks
       }) 
    });   
 }
 
 export function  addStage (text) {
 
    let stages = [...store.getState().stages];
    stages.push (  text )
    firebase.database().ref('stages').push (text);
 }
 
 export function  addTask (stage, text) {
    console.log ('addTask:', stage + ' - ' +  text);
 
    let tasks = [...store.getState().tasks];
 
    let newTask = {
       id : store.getState().tasks.length,
       title: text,
       stage : stage
    } 
 
    firebase.database().ref('tasks/' + newTask.id).set (newTask);
    /*
    store.setState ({
       tasks : tasks
    })  */
 }
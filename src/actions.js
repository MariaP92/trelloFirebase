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

const snapshotToArray = snapshot => {
    let tasks = []
    snapshot.forEach(childSnapshot => {
       let item = childSnapshot.val();
       let key = childSnapshot.key;
       item.id = key;
       tasks.push( item );
     });

    store.setState({
       tasks: tasks
    })
    console.log(store.getState.tasks);
 };

 export const readAllTasks = () => {
    firebase.database()
          .ref('tasks/')
          .on('value', (res) => {
             snapshotToArray(res)
          });
 }

 export  async function addTask (task){
    const addTaskList = [...store.getState().cards]
    const newcard = {
        task: task
     };
     const res = await  firebase.database().ref('tasks/').push (newcard);
     newcard.id = res.key;
  
     const newCard=addTaskList.concat(newcard);
    store.setState({
        cards: newCard
    })

}

export const deleteTask = (id) => {
    firebase.database().ref('tasks/').child(id).remove();
 }

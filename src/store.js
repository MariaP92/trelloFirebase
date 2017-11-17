import createStore from 'redux-zero'

const initialState = {
   stages: [ ],
   tasks: [ ],
   successLogin : false,
   user : {
      id : null,
      email :  null,
      userName :  null,
      lastName :  null,
      pass :  null,
      userStages : [],
      userTasks: []      
   }  
};

const store = createStore (initialState);
export default store;   
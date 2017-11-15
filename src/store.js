import createStore from 'redux-zero'
let Cards = [
    {
        id:0,
        title: 'To Do',
        task:'Tarea 1',
        add: false
    }
]

const initialState = {
    cards: Cards
}

const store = createStore(initialState);
export default store;
import { createStore } from 'redux';
import userReducer from './store/reducers.js';
import { changeUserObject, changeToken } from './store/actions.js';

const store = createStore(userReducer);

store.subscribe(()=> {
    console.log(store.getState())
})


export default store;

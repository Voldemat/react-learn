import { createStore, combineReducers } from 'redux';

// import reducers
import userReducer from './store/reducers/userReducer.js';
import chatReducer from './store/reducers/chatReducer.js';
import apiUrlReducer from './store/reducers/apiUrlReducer.js';

const reducers = combineReducers({user:userReducer, chat:chatReducer, api:apiUrlReducer})
const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=> {
    console.log(store.getState())
})


export default store;

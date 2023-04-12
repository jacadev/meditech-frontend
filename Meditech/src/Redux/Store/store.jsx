import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from '../Reducer/reducer';
import thunkMiddleware from 'redux-thunk'


const comoposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    comoposeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;
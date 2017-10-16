import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import campuses from './reducers/campuses';
import students from './reducers/students';


export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

export * from './reducers/campuses';
export * from './reducers/students';

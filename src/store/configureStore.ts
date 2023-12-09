import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';
import rLocations from './reducers';

// Create an Axios instance for each API client
const api1 = axios.create({ 
  baseURL: 'https://api.example.com/api1/',
  responseType: 'json'
 });
const api2 = axios.create({ 
  baseURL: 'https://api.example.com/api2/',
   responseType: 'json'
 });

// Create a configuration for each API client
const clients: any = {
  client1: {
    client: api1,
  },
  client2: {
    client: api2,
  },
};

const rootReducer = combineReducers({
  locations: rLocations,
});

const middleware = [thunk, multiClientMiddleware(clients)];
let composeEnhancers = compose;

const configureStore = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default configureStore;

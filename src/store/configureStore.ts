import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { multiClientMiddleware } from "redux-axios-middleware";
import places from "./reducers/places";
import weather from "./reducers/weather";
import { clients } from "@/api/clients";

const rootReducer = combineReducers({
  places: places,
  weather: weather,
});

const middleware = [thunk, multiClientMiddleware(clients)];
let composeEnhancers = compose;

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;

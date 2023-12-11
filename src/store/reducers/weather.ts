import { types } from "../actions/weather";

const initialState = {
  loading: false,
};
const {GET_WEATHER_REQUEST } = types;

const rLocations = (state = initialState, action: { type?: any; payload?: any; }) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rLocations;

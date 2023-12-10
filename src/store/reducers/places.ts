import { types } from "../actions/places";

const initialState = {
  loading: false,
  locations: [],
};
const { GET_LOCATIONS_REQUEST } = types;

const rLocations = (state = initialState, action: { type?: any; payload?: any; }) => {
  switch (action.type) {
    case GET_LOCATIONS_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rLocations;

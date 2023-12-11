import { asyncAction, createTypes } from "../utils/types";

export const types = createTypes("places/", asyncAction("GET_LOCATIONS"));

export const getPlaces = (payload: any) => (dispatch: any) =>
  dispatch({
    type: [
      types.GET_LOCATIONS_REQUEST,
      types.GET_LOCATIONS_SUCCESS,
      types.GET_LOCATIONS_FAIL,
    ],
    payload: {
      client: "reservamos",
      request: {
        method: "GET",
        url: "/places",
        params: {
          ...payload,
        },
      },
    },
  });

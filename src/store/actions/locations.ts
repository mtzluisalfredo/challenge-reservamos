import { asyncAction, createTypes } from "../utils/types";

export const types = createTypes("app/", asyncAction("GET_LOCATIONS"));

export const getPokemons =
  () =>
  (
    dispatch: (arg0: {
      types: (string | number)[];
      payload: { request: { url: string } };
    }) => any
  ) =>
    dispatch({
      types: [
        types.GET_LOCATIONS_REQUEST,
        types.GET_LOCATIONS_SUCCESS,
        types.GET_LOCATIONS_FAIL,
      ],
      payload: {
        request: {
          url: "pokemon?limit=100&offset=0",
        },
      },
    });

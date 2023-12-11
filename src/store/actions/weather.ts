import { asyncAction, createTypes } from "../utils/types";

export const types = createTypes("weather/", asyncAction("GET_WEATHER"));

export const getWeather =
  (payload: { lat: string; lon: string }) => (dispatch: any) =>
    dispatch({
      type: [
        types.GET_WEATHER_REQUEST,
        types.GET_WEATHER_SUCCESS,
        types.GET_WEATHER_FAIL,
      ],
      payload: {
        client: "openweathermap",
        request: {
          method: "GET",
          url: "/forecast",
          params: {
            ...payload,
          },
        },
      },
    });

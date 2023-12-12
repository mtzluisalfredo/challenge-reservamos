import axios from "axios";

const reservamos = axios.create({
  baseURL: "https://search.reservamos.mx/api/v2",
  responseType: "json",
});

const openweathermap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.NEXT_PUBLIC_API_KEY_WEATHER,
  },
});

export const clients: any = {
  reservamos: {
    client: reservamos,
  },
  openweathermap: {
    client: openweathermap,
  },
};

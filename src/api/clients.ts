import axios from "axios";

const reservamos = axios.create({
  baseURL: "https://search.reservamos.mx/api/v2",
  responseType: "json",
});

const openweathermap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: "a5a47c18197737e8eeca634cd6acb581",
  },
});

// Create a configuration for each API client
export const clients: any = {
  reservamos: {
    client: reservamos,
  },
  openweathermap: {
    client: openweathermap,
  },
};

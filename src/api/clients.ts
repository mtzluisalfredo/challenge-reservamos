import axios from "axios";

const reservamos = axios.create({
  baseURL: "https://search.reservamos.mx/api/v2",
  responseType: "json",
});

const openweathermap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "0eebd1fcf852d29ca0340c5c451d4c9a",
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

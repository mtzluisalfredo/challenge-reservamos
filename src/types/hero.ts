export type getActions = (p?: { [x: string]: any }) => void;

export interface IGetPlaces {
  getPlaces: getActions;
}

export interface IGetWeather {
  getWeather: (payload: { lat: string; lon: string }) => any;
}

export interface IOnSearch {
  onSearch: (payload: { search: string }) => any;
}

export interface IHero extends IGetPlaces, IGetWeather {}

export interface ITripDetails extends IGetPlaces, IGetWeather, IOnSearch {}

export interface IvaluesTrip {
  from: {
    display: string;
  };
  to: {
    display: string;
  };
  type: string;
  startDate: string;
  endDate: string;
}

export interface IRoute extends IGetPlaces, IGetWeather, IOnSearch {
  setValuesTrip: any;
  valuesTrip: IvaluesTrip;
}

export interface CityData {
  ascii_display: string;
  city_ascii_name: string;
  city_name: string;
  city_slug: string;
  country: string;
  display: string;
  id: number;
  label: string;
  lat: string;
  long: string;
  popularity: string;
  result_type: string;
  slug: string;
  sort_criteria: number;
  state: string;
  value: number;
}

export interface IGenericInput {
  target: { value: any };
}

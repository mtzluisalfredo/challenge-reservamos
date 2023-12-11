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

interface IvaluesTrip {
  from: {};
  to: {};
  type: string;
}

export interface IRoute extends IGetPlaces, IGetWeather, IOnSearch {
  setValuesTrip: React.Dispatch<React.SetStateAction<IvaluesTrip>>;
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

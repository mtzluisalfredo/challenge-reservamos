export type getActions = (p?: { [x: string]: any }) => void;

export interface IGetPlaces {
  getPlaces: getActions;
}

export interface IHero extends IGetPlaces {}

export interface ITripDetails extends IGetPlaces {}

export interface ITripDetails extends IGetPlaces {}

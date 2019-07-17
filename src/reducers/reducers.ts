import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { CitiesReducer } from './citiesReducer';
import { WeatherReducer } from './weatherReducer';
import { CityIdReducer } from './cityIdReducer';
import { ICity, IWeather } from '../interfaces';

export interface IGlobalState {
  token: string;
  cities: ICity[];
  weather: IWeather | null;
  cityId: number;
};

export const reducers = combineReducers<IGlobalState>({
  token: tokenReducer,
  cities: CitiesReducer,
  weather: WeatherReducer,
  cityId: CityIdReducer
});

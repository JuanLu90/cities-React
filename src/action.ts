import { ActionCreator } from 'redux';
import { TAction } from './actionTypes';
import { IWeather } from './interfaces';

export const setToken: ActionCreator<TAction> = (token: string) => ({
    type: "SET_TOKEN",
    token
});

export const setCities: ActionCreator<TAction> = (cities: []) => ({
    type: "SET_CITIES",
    cities
})

export const setWeather: ActionCreator<TAction> = (weather: IWeather) => ({
    type: "SET_WEATHER",
    weather
})

export const setCityId: ActionCreator<TAction> = (cityId: number) => ({
    type: "SET_CITYID",
    cityId
})
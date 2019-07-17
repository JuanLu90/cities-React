import { TAction } from '../actionTypes';
import { IWeather } from '../interfaces';

export const WeatherReducer = (
    state: IWeather | null = null,
    action: TAction
) => {
    if (action.type === "SET_WEATHER") {
        return action.weather;
    }
    return state;
};
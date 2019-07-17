import { IWeather } from './interfaces';
type TToken = {
    type: "SET_TOKEN";
    token: string;
};

type TCity = {
    type: "SET_CITIES";
    cities: []
};

type TWeather = {
    type: "SET_WEATHER";
    weather: IWeather
};

type TCityId = {
    type: "SET_CITYID";
    cityId: number;
}

export type TAction = TToken | TCity | TWeather | TCityId
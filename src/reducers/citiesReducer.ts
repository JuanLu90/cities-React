import { TAction } from '../actionTypes';
import { ICity } from '../interfaces';


export const CitiesReducer = (
    state: ICity[] = [],
    action: TAction
): ICity[] => {
    if (action.type === "SET_CITIES") {
        return action.cities;
    }
    return state;
};
import { TAction } from '../actionTypes';

export const CityIdReducer = (
    state: number = -1,
    action: TAction
): number => {
    if (action.type === "SET_CITYID") {
        return action.cityId;
    }
    return state;
};
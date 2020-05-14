import { INITIAL_GLOBE_STATE, GlobeStateModel } from './globe.state';
import { GlobeAction, GlobeActionTypes } from './globe.actions';

export function globeReducer(
    state = INITIAL_GLOBE_STATE, action: GlobeAction): GlobeStateModel {

    switch (action.type) {

        case GlobeActionTypes.SET_COUNTRIES:
            return {
                ...state,
                Countries: action.countries
            };
            break;


        case GlobeActionTypes.SET_COUNTRY:
            return {
                ...state,
                Country: action.country
            };
            break;

        default:
            return state;
    }
};
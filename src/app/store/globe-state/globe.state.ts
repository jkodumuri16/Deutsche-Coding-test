import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Region, ASIA, EUROPE } from 'src/app/models/region.model';
import { Country } from 'src/app/models/country.model';
import { GetRegions, GetCountries, SetCountries, SetCountry } from './globe.actions';
import { GlobeService } from 'src/app/services/globe.service';
import { mergeMap, switchMap, map } from 'rxjs/operators';

export class GlobeStateModel {
    Region: Region;
    Country: Country;
    Regions: Region[];
    Countries: Country[];
}

export const INITIAL_GLOBE_STATE: GlobeStateModel = {
    Region: null,
    Country: null,
    Regions: [ASIA, EUROPE],
    Countries: null,
}
@State<GlobeStateModel>({
    name: 'globe',
    defaults: INITIAL_GLOBE_STATE
})
export class GlobeState {

    constructor(private globeService: GlobeService) { }

    @Selector()
    public static regions(state: GlobeStateModel): Region[] {
        return state.Regions;
    }

    @Selector()
    public static countries(state: GlobeStateModel): Country[] {
        return state.Countries;
    }

    @Selector()
    public static country(state: GlobeStateModel): Country {
        return state.Country;
    }

    @Action(SetCountries)
    setCountries(ctx: StateContext<GlobeStateModel>, action: SetCountries) {
        console.log('in set', action)
        const state = ctx.getState();
        ctx.setState({
            ...state,
            Countries: action.countries
        });
    }

    @Action(SetCountry)
    setCountry(ctx: StateContext<GlobeStateModel>, action: SetCountry) {
        console.log('in setc', action)
        const state = ctx.getState();
        // const country = state.Countries.find(x => x.id === action.country);
        ctx.setState({
            ...state,
            Country:  action.country
        });
    }

    @Action(GetCountries)
    getCountries(ctx: StateContext<GlobeStateModel>, { regionId }: GetCountries) {
        return this.globeService.getCountries(regionId)
            .pipe(
                map(data => ctx.dispatch(new SetCountries(data)))
            );
    }
}

/*

get countries - effects
loadcountries - reducer


*/
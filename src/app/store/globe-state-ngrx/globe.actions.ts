import { Country } from 'src/app/models/country.model';

export enum GlobeActionTypes {
    GET_REGIONS = '[GLOBE] Get Regions',
    GET_COUNTRIES = '[GLOBE] Get Countries',
    SET_COUNTRIES = '[GLOBE] Set Countries',
    SET_COUNTRY = '[GLOBE] Set Country',
}


export class GetRegions {
    readonly type = GlobeActionTypes.GET_REGIONS;
    constructor(public payload?: any) { }
}

export class GetCountries {
    readonly type = GlobeActionTypes.GET_COUNTRIES;
    constructor(public regionId: string) { }
}

export class SetCountries {
    readonly type = GlobeActionTypes.SET_COUNTRIES;
    constructor(public countries: Country[]) { }
}

export class SetCountry {
    readonly type = GlobeActionTypes.SET_COUNTRY;
    constructor(public country: Country) { }
}

export type GlobeAction
    = GetRegions
    | GetCountries
    | SetCountries
    | SetCountry;
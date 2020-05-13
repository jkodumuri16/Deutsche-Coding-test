import { Country } from 'src/app/models/country.model';

export class GetRegions {
    static readonly type = '[GLOBE] Get Regions';
}

export class GetCountries {
    static readonly type = '[GLOBE] Get Countries';
    constructor(public regionId: string) { }
}

export class SetCountries {
    static readonly type = '[GLOBE] Set Countries';
    constructor(public countries: Country[]) { }
}

export class SetCountry {
    static readonly type = '[GLOBE] Set Country';
    constructor(public country: Country) { }
}
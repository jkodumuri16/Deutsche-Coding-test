import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Region, ASIA, EUROPE } from 'src/app/models/region.model';
import { Country } from 'src/app/models/country.model';

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


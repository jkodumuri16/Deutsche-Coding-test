import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobeStateModel } from './globe.state';

export const taskState = createFeatureSelector<GlobeStateModel>('globe');
export const selectRegions = createSelector(taskState, (state: GlobeStateModel) => state.Regions);
export const selectCountries = createSelector(taskState, (state: GlobeStateModel) => state.Countries);
export const selectCountry = createSelector(taskState, (state: GlobeStateModel) => state.Country);
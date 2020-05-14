import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobeService } from 'src/app/services/globe.service';
import { GetCountries, GlobeActionTypes, SetCountries } from './globe.actions';

@Injectable()
export class GlobeEffects {
    constructor(
        private actions$: Actions,
        private globeService: GlobeService
    ) { }


    @Effect()
    GetCountries$ = this.actions$.pipe(
        ofType<GetCountries>(GlobeActionTypes.GET_COUNTRIES),
        switchMap((action: GetCountries) => {
            return this.globeService.getCountries(action.regionId)
                .pipe(
                    map(data => new SetCountries(data))
                )
        }),
        catchError(error => of(error))
    )

}
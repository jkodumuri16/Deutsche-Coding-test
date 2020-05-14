import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  ENDPOINTS = {
    COUNTRIES: "https://restcountries.eu/rest/v2/region/"
  }
  CountriesCache: any = {};
  constructor(private http: HttpClient) { }

  getCountries(regionId: string): Observable<Country[]> {
    const cache = this.CountriesCache[`${this.ENDPOINTS.COUNTRIES}${regionId}`];
    if (cache) {
      return of(cache);
    }
    else {
      return this.http.get<Country[]>(`${this.ENDPOINTS.COUNTRIES}${regionId}`, {})
        .pipe(
          map(this.transformCountry),
          tap(x => this.CountriesCache[`${this.ENDPOINTS.COUNTRIES}${regionId}`] = x),
          catchError(this.handleError));
    }



  }

  transformCountry(countries: Country[]): Country[] {
    return countries.map(country => {
      country.id = country.name;
      country.currencyCodes = country.currencies.map(x => x.code).join(', ');
      return country;
    })
  }

  // Common handler to handle errors in http calls
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}

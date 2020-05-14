import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { LocationChooserConfig } from 'src/app/models/location-chooser-config.model';
import { Region } from 'src/app/models/region.model';
import { GetCountries, SetCountry } from 'src/app/store/globe-state-ngrx/globe.actions';
import { selectCountries, selectCountry, selectRegions } from './../../store/globe-state-ngrx/globe.selectors';

@Component({
  selector: 'app-globe-container',
  templateUrl: './globe-container.component.html',
  styleUrls: ['./globe-container.component.scss']
})
export class GlobeContainerComponent {

  public regions$: Observable<Region[]>;
  public countries$: Observable<Country[]>;
  public country$: Observable<Country>;

  regionChooserConfig: LocationChooserConfig = new LocationChooserConfig();
  countryChooserConfig: LocationChooserConfig = new LocationChooserConfig();

  constructor(private store: Store) {
    this.regions$ = this.store.select(selectRegions);
    this.countries$ = this.store.select(selectCountries);
    this.country$ = this.store.select(selectCountry);

    this.regionChooserConfig.label = 'Region';
    this.regionChooserConfig.placeHolder = 'Select a Region';
    this.countryChooserConfig.label = 'Country';
    this.countryChooserConfig.placeHolder = 'Select a Country';

  }

  onRegionSelect(event: Region) {
    this.store.dispatch(new GetCountries(event.id));
  }
  onCountrySelect(event: Country) {
    this.store.dispatch(new SetCountry(event));
  }

}

import { SetCountry } from './../../store/globe-state/globe.actions';
import { Country } from 'src/app/models/country.model';
import { Component, OnInit } from '@angular/core';
import { GlobeState } from 'src/app/store/globe-state/globe.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region.model';
import { LocationChooserConfig } from 'src/app/models/location-chooser-config.model';
import { GetCountries } from 'src/app/store/globe-state/globe.actions';

@Component({
  selector: 'app-globe-container',
  templateUrl: './globe-container.component.html',
  styleUrls: ['./globe-container.component.scss']
})
export class GlobeContainerComponent implements OnInit {

  @Select(GlobeState.regions) public regions$: Observable<Region[]>;
  @Select(GlobeState.countries) public countries$: Observable<Country[]>;
  @Select(GlobeState.country) public country$: Observable<Country>;


  regionChooserConfig: LocationChooserConfig = new LocationChooserConfig();
  countryChooserConfig: LocationChooserConfig = new LocationChooserConfig();
  constructor(private store: Store) {

    this.regionChooserConfig.label = 'Region';
    this.regionChooserConfig.placeHolder = 'Select a Region';
    this.countryChooserConfig.label = 'Country';
    this.countryChooserConfig.placeHolder = 'Select a Country';

  }

  ngOnInit() {
    // this.regions$.subscribe(data => {
    //   console.log(data)
    // });
  }

  onRegionSelect(event: Region) {
    console.log(event);
    this.store.dispatch(new GetCountries(event.id));
  }
  onCountrySelect(event: Country) {
    console.log('on cou',event);
    this.store.dispatch(new SetCountry(event));
  }

}

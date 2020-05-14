import { GetCountries, SetCountry } from './../../store/globe-state-ngrx/globe.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { CountryDetailComponent } from './../country-detail/country-detail.component';
import { LocationChooserComponent } from './../location-chooser/location-chooser.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeContainerComponent } from './globe-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import { Country } from 'src/app/models/country.model';

describe('GlobeContainerComponent', () => {
  let component: GlobeContainerComponent;
  let fixture: ComponentFixture<GlobeContainerComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule, MatSelectModule, BrowserAnimationsModule
      ],
      declarations: [GlobeContainerComponent, LocationChooserComponent, CountryDetailComponent],
      providers: [
        {
          provide: Store, useValue: {
            select: jasmine.createSpy('select'),
            dispatch: jasmine.createSpy('dispatch')
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetCountries when onRegionSelect is called', () => {
    component.onRegionSelect({ id: 'test-id', name: 'test-name' });

    expect(store.dispatch).toHaveBeenCalledWith(new GetCountries('test-id'));
  });

  it('should dispatch SetCountries when onCountrySelect is called', () => {
    const mockCountry: Country = { id: 'test-id', name: 'test-name', capital: 'test-cap ', population: 111, currencyCodes: '', flag: '', currencies: [] }
    component.onCountrySelect(mockCountry);

    expect(store.dispatch).toHaveBeenCalledWith(new SetCountry(mockCountry));
  });
});

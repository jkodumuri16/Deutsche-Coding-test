import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { GlobeContainerComponent } from './components/globe-container/globe-container.component';
import { LocationChooserComponent } from './components/location-chooser/location-chooser.component';
import { GlobeStoreModule } from './store/globe-state-ngrx/globe-state.module';
import { GlobeEffects } from './store/globe-state-ngrx/globe.effects';
import { globeReducer } from './store/globe-state-ngrx/globe.reducer';


@NgModule({
  declarations: [
    AppComponent,
    GlobeContainerComponent,
    LocationChooserComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(globeReducer),
    EffectsModule.forRoot([GlobeEffects]),
    GlobeStoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [GlobeEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }

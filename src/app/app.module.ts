import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeContainerComponent } from './components/globe-container/globe-container.component';
import { LocationChooserComponent } from './components/location-chooser/location-chooser.component';
import { GlobeState } from './store/globe-state/globe.state';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';


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
    NgxsModule.forRoot([GlobeState]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

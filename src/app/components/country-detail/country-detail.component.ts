import { Country } from 'src/app/models/country.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  @Input()
  country: Country;
  
  constructor() { }

  ngOnInit(): void {
  }

}

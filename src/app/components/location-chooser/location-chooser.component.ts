import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationChooserConfig } from 'src/app/models/location-chooser-config.model';

@Component({
  selector: 'app-location-chooser',
  templateUrl: './location-chooser.component.html',
  styleUrls: ['./location-chooser.component.scss']
})
export class LocationChooserComponent implements OnInit {

  @Input()
  locations: any[];

  @Input()
  config: LocationChooserConfig;

  @Output()
  valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event) {
    this.valueChanged.emit(event.value)
  }

}

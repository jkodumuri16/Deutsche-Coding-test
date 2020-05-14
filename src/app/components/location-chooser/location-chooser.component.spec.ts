import { MatSelectModule } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChooserComponent } from './location-chooser.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LocationChooserComponent', () => {
  let component: LocationChooserComponent;
  let fixture: ComponentFixture<LocationChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule, MatSelectModule, BrowserAnimationsModule
      ],
      declarations: [LocationChooserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChooserComponent);
    component = fixture.componentInstance;
    component.config = <any>{}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value when onSelectionChange is called', () => {
    const mockEvent: any = { value: 'test-id' }
    const spy = spyOn(component.valueChanged, 'emit');

    component.onSelectionChange(mockEvent);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('test-id');
  });
});

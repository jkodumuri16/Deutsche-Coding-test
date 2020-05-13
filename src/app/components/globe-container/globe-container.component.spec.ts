import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeContainerComponent } from './globe-container.component';

describe('GlobeContainerComponent', () => {
  let component: GlobeContainerComponent;
  let fixture: ComponentFixture<GlobeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

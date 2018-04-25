import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardComponentComponent } from './flight-card-component.component';

describe('FlightCardComponentComponent', () => {
  let component: FlightCardComponentComponent;
  let fixture: ComponentFixture<FlightCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

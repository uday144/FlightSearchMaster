import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightCardComponentComponent } from '../flight-card-component/flight-card-component.component';
import { SearchtableviewComponent } from './searchtableview.component';

describe('SearchtableviewComponent', () => {
  let component: SearchtableviewComponent;
  let fixture: ComponentFixture<SearchtableviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtableviewComponent, FlightCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

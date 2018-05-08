import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { ProgressbarModule } from 'ngx-bootstrap';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { FlightCardComponentComponent } from './flight-card-component/flight-card-component.component';
import { SearchtableviewComponent } from './searchtableview/searchtableview.component';
import { SearchinputviewComponent } from './searchinputview/searchinputview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { SearchFlightService } from './search-flight.service';
import { DisableControlDirective } from './disable-control.directive';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common'
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, SearchtableviewComponent,SearchinputviewComponent, FlightCardComponentComponent, DisableControlDirective 
      ],
       providers: [
        SearchFlightService, DatePipe
      ],
      imports: [ProgressbarModule.forRoot(), TabsModule.forRoot() ,IonRangeSliderModule, ReactiveFormsModule, HttpModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    app = fixture.debugElement.componentInstance;
   
  }));
 

  it(`should have as title 'Flight Master'`, async(() => {
     expect(app.title).toEqual('Flight Master');
  }));
});

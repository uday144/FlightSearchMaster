import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchFlightService } from './search-flight.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchtableviewComponent } from './searchtableview/searchtableview.component';
import { SearchinputviewComponent } from './searchinputview/searchinputview.component';
import {FormsModule} from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common'
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material';
import { FlightCardComponentComponent } from './flight-card-component/flight-card-component.component';
import { DisableControlDirective } from './disable-control.directive';
import { DecimalPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    SearchtableviewComponent,
    SearchinputviewComponent,
    FlightCardComponentComponent,
    DisableControlDirective
  ],
  imports: [
    IonRangeSliderModule,
    AutoCompleteModule, 
    ProgressbarModule.forRoot(), 
    BsDatepickerModule.forRoot(), 
    TabsModule.forRoot(), 
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule
  ],
  providers: [SearchFlightService, DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

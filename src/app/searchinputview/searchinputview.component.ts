import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchFlightService } from '../search-flight.service';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-searchinputview',
  templateUrl: './searchinputview.component.html',
  styleUrls: ['./searchinputview.component.css']
})
export class SearchinputviewComponent implements OnInit {
airports: any;
fromDate: Date;
toDate: Date;
bsValue = new Date();
minDate: Date;
maxDate: Date;
roundTripTxt = 'Return Trip';
oneWayTxt = 'One Way';
isDateDisabled = true;
@Output() onformsubmit: EventEmitter<any> = new EventEmitter<any>();
flightForm: FormGroup;
  constructor(private sfService: SearchFlightService, private formBuilder: FormBuilder) {
    // this.minDate = new Date();
    // this.maxDate = new Date();
    // this.minDate.setDate(this.minDate.getDate());
    // this.maxDate.setDate(this.maxDate.getDate() + 150);
   }

  ngOnInit() {
    
      this.flightForm = this.formBuilder.group({
        from: new FormControl('',Validators.required),
        to: new FormControl('',Validators.required),
        todate: null,
        fromdate: null,
        pass: new FormControl('',Validators.required)
    });

     
    this.sfService.getAirPorts().subscribe(data => {
      this.airports = data;
    });
  }

public searchNow(e): void {
   if(e){
    e.preventDefault();
   }

    this.onformsubmit.emit(this.flightForm.value);
}

onSelect(data: TabDirective): void {
   if(data.heading === this.oneWayTxt){
    this.isDateDisabled = true;
    this.toDate = null;
    this.flightForm.controls['todate'].setValue(null);
   }else{
    this.isDateDisabled = false;
   }
   
  }

isSearchButtonDisabled()
{
   if(this.isDateDisabled && this.flightForm.get('from').value === "" || this.flightForm.get('to').value === ""  || this.flightForm.get('pass').value === "")
   {
     return true;
  // } else if(!this.isDateDisabled && this.flightForm.get('from').value === "" || this.flightForm.get('to').value === "" || this.flightForm.get('pass').value === "" || this.flightForm.get('fromdate').value == null || this.flightForm.get('todate').value == null)
  // {
  //   return true;
   } else {
     return false;
   }
}
}

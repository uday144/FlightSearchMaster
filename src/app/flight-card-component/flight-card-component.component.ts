import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../entities/flight';
@Component({
  selector: 'app-flight-card-component',
  templateUrl: './flight-card-component.component.html',
  styleUrls: ['./flight-card-component.component.css']
})
export class FlightCardComponentComponent implements OnInit {
  @Input() item: Flight;
  @Input() item2: Flight;
  constructor() { }

  ngOnInit() {
  }

  isNullOrUndefined(obj) {
    if (obj === null || obj === undefined) {
      return true;
      }
      else {
       return false;
      }
     }
   
   getPrice(obj, obj2)
   {
   
    let price = !this.isNullOrUndefined(obj)?obj.price : 0;
    let price2 = !this.isNullOrUndefined(obj2)?obj2.price : 0;

    return price + price2;

    
   }  
   getFlightNo(obj)
   {
    if(!this.isNullOrUndefined(obj))
    {
      return obj.number;
    } 
   } 
   getSourceDest(obj)
   {
    if(!this.isNullOrUndefined(obj))
    {
      return obj.origin + ">" + obj.destination;
    }
   } 
   getArriveTime(obj)
   {
    if(!this.isNullOrUndefined(obj))
    {
      return "22:00";
    }
   } 
   getDepartTime(obj)
   {
    if(!this.isNullOrUndefined(obj))
    {
      return "01:15";
    }
   } 
}

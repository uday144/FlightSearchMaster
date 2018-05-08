import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from './search-flight.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { Flight } from './entities/flight';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Flight Master';
  dates: string;
  isProgressBarVisible = false;
  airports: any;
  isReturn: boolean;
  flights: Flight[];
  searchResultsOneWay:Flight[];
  searchResultsReturn:Flight[];
  clonedResults:Flight[];
  contentMessage = "Flight Details Here..";
  constructor(private sfService: SearchFlightService, public datepipe: DatePipe) {


  }
   
  ngOnInit() {
  
    this.sfService.getFlights().subscribe(data => {
      this.flights = data;
   
    });

  }

  findFlights(source: string, destination: string) {
    this.searchResultsOneWay = [];
    this.searchResultsReturn = [];
    this.clonedResults = [];
    for (var i = 0; i < this.flights.length; i++) {
      if (this.flights[i].origin === source && this.flights[i].destination === destination) {
        this.flights[i].roundTrip = false;
        this.searchResultsOneWay.push(this.flights[i]);
        this.clonedResults.push(this.flights[i]);
      } else if(this.isReturn && this.flights[i].origin === destination && this.flights[i].destination === source){
         this.flights[i].roundTrip = true;
         this.searchResultsReturn.push(this.flights[i]);
         this.clonedResults.push(this.flights[i]);
      }
    }
      if(this.clonedResults.length == 0){
      this.contentMessage = 'No Flight found';
     }
  }
  checkResult()
  {
    if(!this.isNullOrUndefined(this.clonedResults) && this.clonedResults.length == 0){
      return true;
    } else {
      return false;
    }
  }
  filterResult(min: number, max: number) {
    this.searchResultsOneWay = [];
    this.searchResultsReturn = [];
    for (var i = 0; i < this.clonedResults.length; i++) {

      if (this.clonedResults[i].price <= max && this.clonedResults[i].price >= min) {
        this.searchResultsOneWay.push(this.clonedResults[i]);

      }
      else if(this.isReturn && this.clonedResults[i].price <= max && this.clonedResults[i].price >= min){
         this.searchResultsReturn.push(this.flights[i]);
      }
    }
  
  }
  
  

  searchNow(flightForm) {
   this.isProgressBarVisible = true;
   this.contentMessage = 'Loading..'
   let str = flightForm.from;    
   let str1 = flightForm.to;   
   
   let fromDate = flightForm.fromdate;

   let toDate = flightForm.todate;
   this.isReturn = toDate == null? false:true;
   this.title = str.split("(")[0] +">" + str1.split("(")[0] ;
   this.title = this.isReturn?this.title + ">" + str.split("(")[0] : this.title;
   this.dates =this.datepipe.transform(fromDate, 'MMMM d, y');
   this.dates = this.isReturn?this.dates + "~" + this.datepipe.transform(toDate, 'MMMM d, y') : this.dates+ "~";
   let from = str.substring(str.lastIndexOf("(")+1,str.lastIndexOf(")"));
   let to = str1.substring(str1.lastIndexOf("(")+1,str1.lastIndexOf(")"));
   setTimeout(()=> {
         this.findFlights(from,to);
         this.isProgressBarVisible = false;
         },2000);  
  }

   isUndefined(obj){
      if ( typeof(obj) !== "undefined" && obj !== null ) {
        return false
      }
      else return true;
   }
 
myOnUpdate(event)
{

}
myOnChange(event)
{
  
}
myOnFinish(event)
{
    this.filterResult(event.from, event.to);  
}
  valueChanged(newVal) {
   
  }

 isNullOrUndefined(obj) {
     if (obj === null || obj === undefined) {
       return true;
       }
       else {
        return false;
       }
      } 
 }

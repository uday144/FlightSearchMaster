import { Injectable } from '@angular/core';
import { AIRPORTS } from './mock-data';
import { FLIGHTS } from './mock-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class SearchFlightService {
 data: Array<any>;

  constructor(private http: Http) { }
  // getAirPorts(){
  //    return this.http
  //     .get("/assets/airports.json")
  //     .map(data => data.json() as Array<any>)
  //     .subscribe(data => {
  //       this.data = data;
  //     });
  // }
 public getAirPorts(): Observable<any> {
         return this.http.get("/assets/airports.json")
                         .map((res:any) => res.json());

     }
  public getFlights(): Observable<any> {
      return this.http.get("/assets/flights.json")
                      .map((res:any) => res.json());

  }
getAirPort(): Observable<any[]>{
  return Observable.of(AIRPORTS).delay(100);
}
getFlight(): Observable<any[]>{
  return Observable.of(FLIGHTS).delay(100);
}
}

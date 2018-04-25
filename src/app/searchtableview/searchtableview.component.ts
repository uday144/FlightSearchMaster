import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../entities/flight';
@Component({
  selector: 'app-searchtableview',
  templateUrl: './searchtableview.component.html',
  styleUrls: ['./searchtableview.component.css']
})
export class SearchtableviewComponent implements OnInit {
 @Input() searchResults : Flight[];
 @Input() searchResults2 : Flight[];
 @Input() isReturn : boolean;
 @Input() titleStr : string;
 @Input() dates : string;
 
  constructor() { }

  ngOnInit() {
    
    
  }
  getReturnDate()
  {
    if(this.isReturn){
      return this.dates.split("~")[1];
    }

  }
  getDepartDate() {
    return this.dates.split("~")[0];
  }
  getArrayLen(){
    if(this.isReturn){
      if(this.searchResults.length > this.searchResults2.length){
        return this.searchResults;
      } else {
        return this.searchResults2;
      }
    }
    else {
      return this.searchResults;
    }

  }

  

}

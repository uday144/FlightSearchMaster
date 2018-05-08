import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchinputviewComponent } from './searchinputview.component';
import { TabsModule } from 'ngx-bootstrap';
import { SearchFlightService } from '../search-flight.service';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser'; 
import { DisableControlDirective } from '../disable-control.directive';
describe('SearchinputviewComponent', () => {
  let component: SearchinputviewComponent;
  let fixture: ComponentFixture<SearchinputviewComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinputviewComponent, DisableControlDirective ],
      providers: [SearchFlightService ],
      imports: [ReactiveFormsModule, TabsModule.forRoot(), HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinputviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.flightForm.valid).toBeFalsy();
  });

  it('From field validity', () => {
    let From = component.flightForm.controls['from']; 
    expect(From.valid).toBeFalsy(); 
  });

  it('should check Search button is disabled initially', () => {
    fixture.detectChanges();
    let element = fixture.nativeElement;

    const  SearchBtn =   element.querySelector('#search');
    fixture.whenStable().then(() => {
      expect(SearchBtn.disabled).toBe(true)
     })
   });

   it('should check Return date is disabled when round trip is off', () => {
    fixture.detectChanges();
    let element = fixture.nativeElement;

    const  returnDate =   element.querySelector('#rdate');
    fixture.whenStable().then(() => {
      expect(returnDate.disabled).toBe(true)
     })
   });

   it('should check Return date is disabled Other way', () => {
    fixture.detectChanges();
    let element = fixture.nativeElement;

    const  returnDate =   element.querySelector('#rdate');
    fixture.whenStable().then(() => {
      expect(returnDate.disabled).toBe(component.isDateDisabled)
     })
   });

});

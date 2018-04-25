import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinputviewComponent } from './searchinputview.component';

describe('SearchinputviewComponent', () => {
  let component: SearchinputviewComponent;
  let fixture: ComponentFixture<SearchinputviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinputviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinputviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

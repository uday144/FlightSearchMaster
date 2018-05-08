import { TestBed, async, inject } from '@angular/core/testing';
import { SearchFlightService } from './search-flight.service';
import { HttpModule } from '@angular/http';
describe('SearchFlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFlightService ],
      imports: [HttpModule]
    });
  });

  it('should be created', async(inject([SearchFlightService], (service: SearchFlightService) => {
    expect(service).toBeTruthy();
  })));
});

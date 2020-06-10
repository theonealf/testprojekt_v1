import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { WpServiceService } from './wp-service.service';

describe('WpServiceService', () => {
  let service: WpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClient, 
        HttpHeaders
      ],
    });
    service = TestBed.inject(WpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

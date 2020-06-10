import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { QuestApiService } from './quest-api.service';

describe('QuestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClient, 
      HttpHeaders
    ],
  }));

  it('should be created', () => {
    const service: QuestApiService = TestBed.get(QuestApiService);
    expect(service).toBeTruthy();
  });
});

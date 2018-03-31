import { TestBed, inject } from '@angular/core/testing';

import { JsonReaderService } from './json-reader.service';

describe('JsonReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonReaderService]
    });
  });

  it('should be created', inject([JsonReaderService], (service: JsonReaderService) => {
    expect(service).toBeTruthy();
  }));
});

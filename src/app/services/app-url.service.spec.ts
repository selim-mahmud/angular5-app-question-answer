import { TestBed, inject } from '@angular/core/testing';

import { AppUrlService } from './app-url.service';

describe('AppUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUrlService]
    });
  });

  it('should be created', inject([AppUrlService], (service: AppUrlService) => {
    expect(service).toBeTruthy();
  }));
});

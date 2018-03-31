import { TestBed, inject } from '@angular/core/testing';

import { TagDataService } from './tag-data.service';

describe('TagDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagDataService]
    });
  });

  it('should be created', inject([TagDataService], (service: TagDataService) => {
    expect(service).toBeTruthy();
  }));
});

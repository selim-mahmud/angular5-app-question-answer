import { TestBed, inject } from '@angular/core/testing';

import { TagTransformerService } from './tag-transformer.service';

describe('TagTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagTransformerService]
    });
  });

  it('should be created', inject([TagTransformerService], (service: TagTransformerService) => {
    expect(service).toBeTruthy();
  }));
});

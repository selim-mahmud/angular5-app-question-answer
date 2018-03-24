import { TestBed, inject } from '@angular/core/testing';

import { UserTransformerService } from './user-transformer.service';

describe('UserTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTransformerService]
    });
  });

  it('should be created', inject([UserTransformerService], (service: UserTransformerService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PaginationMetaTransformationService } from './pagination-meta-transformation.service';

describe('PaginationMetaTransformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationMetaTransformationService]
    });
  });

  it('should be created', inject([PaginationMetaTransformationService], (service: PaginationMetaTransformationService) => {
    expect(service).toBeTruthy();
  }));
});

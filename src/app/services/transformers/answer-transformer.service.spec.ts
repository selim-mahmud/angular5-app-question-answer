import { TestBed, inject } from '@angular/core/testing';

import { AnswerTransformerService } from './answer-transformer.service';

describe('AnswerTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerTransformerService]
    });
  });

  it('should be created', inject([AnswerTransformerService], (service: AnswerTransformerService) => {
    expect(service).toBeTruthy();
  }));
});

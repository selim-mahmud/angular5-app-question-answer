import { TestBed, inject } from '@angular/core/testing';

import { QuestionTransformerService } from './question-transformer.service';

describe('QuestionTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionTransformerService]
    });
  });

  it('should be created', inject([QuestionTransformerService], (service: QuestionTransformerService) => {
    expect(service).toBeTruthy();
  }));
});

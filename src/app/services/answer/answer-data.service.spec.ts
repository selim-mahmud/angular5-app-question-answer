import { TestBed, inject } from '@angular/core/testing';

import { AnswerDataService } from './answer-data.service';

describe('AnswerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerDataService]
    });
  });

  it('should be created', inject([AnswerDataService], (service: AnswerDataService) => {
    expect(service).toBeTruthy();
  }));
});

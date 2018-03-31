import { TestBed, inject } from '@angular/core/testing';

import { AnswerApiService } from './answer-api.service';

describe('AnswerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerApiService]
    });
  });

  it('should be created', inject([AnswerApiService], (service: AnswerApiService) => {
    expect(service).toBeTruthy();
  }));
});

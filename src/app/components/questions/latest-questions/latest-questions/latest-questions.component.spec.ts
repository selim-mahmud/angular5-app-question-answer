import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestQuestionsComponent } from './latest-questions.component';

describe('LatestQuestionsComponent', () => {
  let component: LatestQuestionsComponent;
  let fixture: ComponentFixture<LatestQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

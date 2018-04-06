import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnswerComponent } from './single-answer.component';

describe('SingleAnswerComponent', () => {
  let component: SingleAnswerComponent;
  let fixture: ComponentFixture<SingleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

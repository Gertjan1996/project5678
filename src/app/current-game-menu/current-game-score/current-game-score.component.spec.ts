import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGameScoreComponent } from './current-game-score.component';

describe('CurrentGameScoreComponent', () => {
  let component: CurrentGameScoreComponent;
  let fixture: ComponentFixture<CurrentGameScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentGameScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

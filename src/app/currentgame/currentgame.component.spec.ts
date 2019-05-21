import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentgameComponent } from './currentgame.component';

describe('CurrentgameComponent', () => {
  let component: CurrentgameComponent;
  let fixture: ComponentFixture<CurrentgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

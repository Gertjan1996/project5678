import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardoptionsComponent } from './boardoptions.component';

describe('BoardoptionsComponent', () => {
  let component: BoardoptionsComponent;
  let fixture: ComponentFixture<BoardoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

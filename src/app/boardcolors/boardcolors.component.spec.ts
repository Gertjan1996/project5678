import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcolorsComponent } from './boardcolors.component';

describe('BoardcolorsComponent', () => {
  let component: BoardcolorsComponent;
  let fixture: ComponentFixture<BoardcolorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardcolorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTimeLeftComponent } from './current-time-left.component';

describe('CurrentTimeLeftComponent', () => {
  let component: CurrentTimeLeftComponent;
  let fixture: ComponentFixture<CurrentTimeLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTimeLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTimeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

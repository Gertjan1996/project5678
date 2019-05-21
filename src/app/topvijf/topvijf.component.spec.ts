import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopvijfComponent } from './topvijf.component';

describe('TopvijfComponent', () => {
  let component: TopvijfComponent;
  let fixture: ComponentFixture<TopvijfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopvijfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopvijfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

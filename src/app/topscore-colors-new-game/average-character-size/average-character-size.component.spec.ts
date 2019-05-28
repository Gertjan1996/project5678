import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCharacterSizeComponent } from './average-character-size.component';

describe('AverageCharacterSizeComponent', () => {
  let component: AverageCharacterSizeComponent;
  let fixture: ComponentFixture<AverageCharacterSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageCharacterSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageCharacterSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

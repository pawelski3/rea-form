import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwocomponentComponent } from './twocomponent.component';

describe('TwocomponentComponent', () => {
  let component: TwocomponentComponent;
  let fixture: ComponentFixture<TwocomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwocomponentComponent]
    });
    fixture = TestBed.createComponent(TwocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

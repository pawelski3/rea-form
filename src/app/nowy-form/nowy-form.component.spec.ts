import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowyFormComponent } from './nowy-form.component';

describe('NowyFormComponent', () => {
  let component: NowyFormComponent;
  let fixture: ComponentFixture<NowyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowyFormComponent]
    });
    fixture = TestBed.createComponent(NowyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

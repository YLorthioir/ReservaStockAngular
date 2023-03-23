import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToValidateComponent } from './to-validate.component';

describe('ToValidateComponent', () => {
  let component: ToValidateComponent;
  let fixture: ComponentFixture<ToValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

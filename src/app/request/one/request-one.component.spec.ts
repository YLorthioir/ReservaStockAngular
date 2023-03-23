import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOneComponent } from './request-one.component';

describe('RequestOneComponent', () => {
  let component: RequestOneComponent;
  let fixture: ComponentFixture<RequestOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

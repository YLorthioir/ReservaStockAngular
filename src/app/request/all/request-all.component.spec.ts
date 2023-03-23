import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAllComponent } from './request-all.component';

describe('RequestAllComponent', () => {
  let component: RequestAllComponent;
  let fixture: ComponentFixture<RequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

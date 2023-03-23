import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDeleteComponent } from './request-delete.component';

describe('RequestDeleteComponent', () => {
  let component: RequestDeleteComponent;
  let fixture: ComponentFixture<RequestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

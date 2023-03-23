import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAllUnconfirmedComponent } from './requestAll-unconfirmed.component';

describe('AllUnconfirmedComponent', () => {
  let component: RequestAllUnconfirmedComponent;
  let fixture: ComponentFixture<RequestAllUnconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAllUnconfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAllUnconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

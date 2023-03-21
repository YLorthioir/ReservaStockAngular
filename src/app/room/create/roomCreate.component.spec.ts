import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreateComponent } from './roomCreate.component';

describe('CreateComponent', () => {
  let component: RoomCreateComponent;
  let fixture: ComponentFixture<RoomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

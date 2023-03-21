import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUpdateComponent } from './roomUpdate.component';

describe('UpdateComponent', () => {
  let component: RoomUpdateComponent;
  let fixture: ComponentFixture<RoomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

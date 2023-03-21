import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOneComponent } from './roomOne.component';

describe('OneComponent', () => {
  let component: RoomOneComponent;
  let fixture: ComponentFixture<RoomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

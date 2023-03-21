import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAllComponent } from './roomAll.component';

describe('RoomComponent', () => {
  let component: RoomAllComponent;
  let fixture: ComponentFixture<RoomAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

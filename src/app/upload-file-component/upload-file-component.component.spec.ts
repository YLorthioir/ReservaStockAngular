import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileComponentComponent } from './upload-file-component.component';

describe('UploadFileComponentComponent', () => {
  let component: UploadFileComponentComponent;
  let fixture: ComponentFixture<UploadFileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

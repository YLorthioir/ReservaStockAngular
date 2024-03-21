import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFileComponentComponent } from './download-file-component.component';

describe('DownloadFileComponentComponent', () => {
  let component: DownloadFileComponentComponent;
  let fixture: ComponentFixture<DownloadFileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadFileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

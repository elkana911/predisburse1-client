import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPCPDialogComponent } from './upload-pcpdialog.component';

describe('UploadPCPDialogComponent', () => {
  let component: UploadPCPDialogComponent;
  let fixture: ComponentFixture<UploadPCPDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPCPDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPCPDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

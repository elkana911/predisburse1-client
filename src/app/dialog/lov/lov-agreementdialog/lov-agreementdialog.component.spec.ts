import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovAgreementdialogComponent } from './lov-agreementdialog.component';

describe('LovAgreementdialogComponent', () => {
  let component: LovAgreementdialogComponent;
  let fixture: ComponentFixture<LovAgreementdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovAgreementdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovAgreementdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

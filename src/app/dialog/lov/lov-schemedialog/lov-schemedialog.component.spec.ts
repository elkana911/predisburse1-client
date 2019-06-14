import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovSchemedialogComponent } from './lov-schemedialog.component';

describe('LovSchemedialogComponent', () => {
  let component: LovSchemedialogComponent;
  let fixture: ComponentFixture<LovSchemedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovSchemedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovSchemedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

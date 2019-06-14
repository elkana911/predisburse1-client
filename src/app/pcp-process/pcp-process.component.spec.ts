import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpProcessComponent } from './pcp-process.component';

describe('PcpProcessComponent', () => {
  let component: PcpProcessComponent;
  let fixture: ComponentFixture<PcpProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

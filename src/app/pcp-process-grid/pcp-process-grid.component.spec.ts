import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpProcessGridComponent } from './pcp-process-grid.component';

describe('PcpProcessGridComponent', () => {
  let component: PcpProcessGridComponent;
  let fixture: ComponentFixture<PcpProcessGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpProcessGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpProcessGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PCPServiceService } from './pcpservice.service';

describe('PCPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PCPServiceService = TestBed.get(PCPServiceService);
    expect(service).toBeTruthy();
  });
});

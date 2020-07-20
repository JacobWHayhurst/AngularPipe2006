import { TestBed } from '@angular/core/testing';

import { ROCPService } from './rocp.service';

describe('ROCPService', () => {
  let service: ROCPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ROCPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

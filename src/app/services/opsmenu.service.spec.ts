import { TestBed } from '@angular/core/testing';

import { OpsmenuService } from './opsmenu.service';

describe('OpsmenuService', () => {
  let service: OpsmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpsmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

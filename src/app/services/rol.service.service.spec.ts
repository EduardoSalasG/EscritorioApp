import { TestBed } from '@angular/core/testing';

import { Rol.ServiceService } from './rol.service.service';

describe('Rol.ServiceService', () => {
  let service: Rol.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rol.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

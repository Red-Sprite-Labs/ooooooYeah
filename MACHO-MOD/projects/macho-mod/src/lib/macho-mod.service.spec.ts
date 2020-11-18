import { TestBed } from '@angular/core/testing';

import { MACHOMODService } from './macho-mod.service';

describe('MACHOMODService', () => {
  let service: MACHOMODService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MACHOMODService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

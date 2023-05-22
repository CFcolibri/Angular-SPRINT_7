import { TestBed } from '@angular/core/testing';

import { ServeiPanellService } from './servei-panell.service';

describe('ServeiPanellService', () => {
  let service: ServeiPanellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiPanellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

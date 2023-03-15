import { TestBed } from '@angular/core/testing';

import { RestaurentAuthService } from './restaurent-auth.service';

describe('RestaurentAuthService', () => {
  let service: RestaurentAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurentAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

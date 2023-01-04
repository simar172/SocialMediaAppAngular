import { TestBed } from '@angular/core/testing';

import { LikeServiceService } from './like-service.service';

describe('LikeServiceService', () => {
  let service: LikeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

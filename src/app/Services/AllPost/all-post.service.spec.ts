import { TestBed } from '@angular/core/testing';

import { AllPostService } from './all-post.service';

describe('AllPostService', () => {
  let service: AllPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

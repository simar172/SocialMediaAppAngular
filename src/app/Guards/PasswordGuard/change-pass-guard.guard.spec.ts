import { TestBed } from '@angular/core/testing';

import { ChangePassGuardGuard } from './change-pass-guard.guard';

describe('ChangePassGuardGuard', () => {
  let guard: ChangePassGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangePassGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

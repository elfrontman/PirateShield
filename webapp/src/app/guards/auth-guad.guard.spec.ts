import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuadGuard } from './auth-guad.guard';

describe('AuthGuadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuadGuard]
    });
  });

  it('should ...', inject([AuthGuadGuard], (guard: AuthGuadGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UserGuideService } from './user-guide.service';

describe('UserGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGuideService = TestBed.get(UserGuideService);
    expect(service).toBeTruthy();
  });
});

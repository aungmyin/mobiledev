import { TestBed } from '@angular/core/testing';

import { LanguageSwitchService } from './language-switch.service';

describe('LanguageSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageSwitchService = TestBed.get(LanguageSwitchService);
    expect(service).toBeTruthy();
  });
});

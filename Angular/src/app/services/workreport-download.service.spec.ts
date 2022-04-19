import { TestBed } from '@angular/core/testing';

import { WorkreportDownloadService } from './workreport-download.service';

describe('WorkreportDownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkreportDownloadService = TestBed.get(WorkreportDownloadService);
    expect(service).toBeTruthy();
  });
});

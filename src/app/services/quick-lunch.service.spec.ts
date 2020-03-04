import { TestBed } from '@angular/core/testing';

import { QuickLunchService } from './quick-lunch.service';

describe('QuickLunchService', () => {
  let service: QuickLunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickLunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

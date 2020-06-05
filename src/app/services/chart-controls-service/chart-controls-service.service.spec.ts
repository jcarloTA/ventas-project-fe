import { TestBed } from '@angular/core/testing';

import { ChartControlsServiceService } from './chart-controls-service.service';

describe('ChartControlsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartControlsServiceService = TestBed.get(ChartControlsServiceService);
    expect(service).toBeTruthy();
  });
});

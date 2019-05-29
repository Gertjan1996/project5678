import { TestBed } from '@angular/core/testing';

import { TopscoreService } from './gameinfo.service'

describe('StatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopscoreService = TestBed.get(TopscoreService);
    expect(service).toBeTruthy();
  });
});
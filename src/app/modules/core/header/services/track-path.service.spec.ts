import { TestBed } from '@angular/core/testing';

import { TrackPathService } from './track-path.service';

describe('TrackPathService', () => {
  let service: TrackPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

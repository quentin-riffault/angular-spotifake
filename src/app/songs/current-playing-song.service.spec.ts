import { TestBed } from '@angular/core/testing';

import { CurrentPlayingSongService } from './current-playing-song.service';

describe('CurrentPlayingSongService', () => {
  let service: CurrentPlayingSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPlayingSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

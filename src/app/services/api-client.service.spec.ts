import { TestBed } from '@angular/core/testing';

import { GameApiClientService } from './game-api-client.service';

describe('ApiClientService', () => {
  let service: GameApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

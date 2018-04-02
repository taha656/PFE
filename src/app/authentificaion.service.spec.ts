import { TestBed, inject } from '@angular/core/testing';

import { AuthentificaionService } from './authentificaion.service';

describe('AuthentificaionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentificaionService]
    });
  });

  it('should be created', inject([AuthentificaionService], (service: AuthentificaionService) => {
    expect(service).toBeTruthy();
  }));
});

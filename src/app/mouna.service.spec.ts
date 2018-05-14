import { TestBed, inject } from '@angular/core/testing';

import { MounaService } from './mouna.service';

describe('MounaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MounaService]
    });
  });

  it('should be created', inject([MounaService], (service: MounaService) => {
    expect(service).toBeTruthy();
  }));
});

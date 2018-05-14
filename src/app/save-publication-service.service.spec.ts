import { TestBed, inject } from '@angular/core/testing';

import { SavePublicationServiceService } from './save-publication-service.service';

describe('SavePublicationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavePublicationServiceService]
    });
  });

  it('should be created', inject([SavePublicationServiceService], (service: SavePublicationServiceService) => {
    expect(service).toBeTruthy();
  }));
});

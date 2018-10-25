import { TestBed, inject } from '@angular/core/testing';

import { ModaisService } from './modais.service';

describe('ModaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModaisService]
    });
  });

  it('should be created', inject([ModaisService], (service: ModaisService) => {
    expect(service).toBeTruthy();
  }));
});

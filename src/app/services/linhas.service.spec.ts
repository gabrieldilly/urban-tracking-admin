import { TestBed, inject } from '@angular/core/testing';

import { LinhasService } from './linhas.service';

describe('LinhasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinhasService]
    });
  });

  it('should be created', inject([LinhasService], (service: LinhasService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ComposicoesService } from './composicoes.service';

describe('ComposicoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComposicoesService]
    });
  });

  it('should be created', inject([ComposicoesService], (service: ComposicoesService) => {
    expect(service).toBeTruthy();
  }));
});

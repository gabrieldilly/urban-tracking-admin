import { TestBed, inject } from '@angular/core/testing';

import { EstacoesService } from './estacoes.service';

describe('EstacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacoesService]
    });
  });

  it('should be created', inject([EstacoesService], (service: EstacoesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { TabelaAPiService } from './tabela-api.service';

describe('TabelaAPiService', () => {
  let service: TabelaAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelaAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

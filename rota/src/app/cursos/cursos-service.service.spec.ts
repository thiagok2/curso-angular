import { TestBed, inject } from '@angular/core/testing';

import { CursosServiceService } from './cursos-service.service';

describe('CursosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosServiceService]
    });
  });

  it('should be created', inject([CursosServiceService], (service: CursosServiceService) => {
    expect(service).toBeTruthy();
  }));
});

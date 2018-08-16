import { TestBed, inject } from '@angular/core/testing';

import { FootballerService } from './footballer.service';

describe('FootballerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballerService]
    });
  });

  it('should be created', inject([FootballerService], (service: FootballerService) => {
    expect(service).toBeTruthy();
  }));
});

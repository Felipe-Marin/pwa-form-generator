import { TestBed } from '@angular/core/testing';

import { FormLocalStorageService } from './form-local-storage.service';

describe('FormLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormLocalStorageService = TestBed.get(FormLocalStorageService);
    expect(service).toBeTruthy();
  });
});

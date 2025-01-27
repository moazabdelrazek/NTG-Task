import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { serviceByIdResolver } from './service-by-id.resolver';

describe('serviceByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => serviceByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

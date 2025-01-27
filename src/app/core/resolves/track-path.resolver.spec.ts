import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { trackPathResolver } from './track-path.resolver';

describe('trackPathResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => trackPathResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

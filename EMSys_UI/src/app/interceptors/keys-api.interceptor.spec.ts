import { TestBed } from '@angular/core/testing';

import { KeysApiInterceptor } from './keys-api.interceptor';

describe('KeysApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeysApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeysApiInterceptor = TestBed.inject(KeysApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

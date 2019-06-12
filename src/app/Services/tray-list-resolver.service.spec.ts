import { TestBed } from '@angular/core/testing';

import { TrayListResolverService } from './tray-list-resolver.service';

describe('TrayListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrayListResolverService = TestBed.get(TrayListResolverService);
    expect(service).toBeTruthy();
  });
});

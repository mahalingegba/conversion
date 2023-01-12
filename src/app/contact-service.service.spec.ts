import { TestBed } from '@angular/core/testing';

import { ContactServiceService } from './contacts-service.service';

describe('ContactServiceService', () => {
  let service: ContactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

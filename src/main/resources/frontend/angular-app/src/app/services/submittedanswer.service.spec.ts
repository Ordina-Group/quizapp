import { TestBed } from '@angular/core/testing';

import { SubmittedanswerService } from './submittedanswer.service';

describe('SubmittedanswerService', () => {
  let service: SubmittedanswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmittedanswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

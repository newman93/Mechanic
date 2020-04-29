import { TestBed } from '@angular/core/testing';

import { AddDefectService } from './add-defect.service';

describe('AddDefectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDefectService = TestBed.get(AddDefectService);
    expect(service).toBeTruthy();
  });
});

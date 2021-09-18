import { TestBed } from '@angular/core/testing';

import { EquipService } from './equip.service';

describe('EquipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipService = TestBed.get(EquipService);
    expect(service).toBeTruthy();
  });
});

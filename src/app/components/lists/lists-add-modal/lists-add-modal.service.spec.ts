import { TestBed } from '@angular/core/testing';

import { ListsAddModalService } from './lists-add-modal.service';

describe('ListsAddModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListsAddModalService = TestBed.get(ListsAddModalService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItem]
    });
  });

  it('should be created', inject([TodoItem], (service: TodoItem) => {
    expect(service).toBeTruthy();
  }));
});

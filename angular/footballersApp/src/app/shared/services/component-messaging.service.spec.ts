import { TestBed, inject } from '@angular/core/testing';

import { ComponentMessagingService } from './component-messaging.service';

describe('ComponentMessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentMessagingService]
    });
  });

  it('should be created', inject([ComponentMessagingService], (service: ComponentMessagingService) => {
    expect(service).toBeTruthy();
  }));
});

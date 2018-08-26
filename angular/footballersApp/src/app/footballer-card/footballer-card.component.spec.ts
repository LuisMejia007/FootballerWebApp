import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerCardComponent } from './footballer-card.component';

describe('FootballerCardComponent', () => {
  let component: FootballerCardComponent;
  let fixture: ComponentFixture<FootballerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

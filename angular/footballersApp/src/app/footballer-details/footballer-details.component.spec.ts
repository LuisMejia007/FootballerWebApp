import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerDetailsComponent } from './footballer-details.component';

describe('FootballerDetailsComponent', () => {
  let component: FootballerDetailsComponent;
  let fixture: ComponentFixture<FootballerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

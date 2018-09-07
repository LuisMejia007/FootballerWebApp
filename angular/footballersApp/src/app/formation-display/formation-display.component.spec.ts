import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDisplayComponent } from './formation-display.component';

describe('FormationDisplayComponent', () => {
  let component: FormationDisplayComponent;
  let fixture: ComponentFixture<FormationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

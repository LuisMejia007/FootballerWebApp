import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFootballersComponent } from './list-of-footballers.component';

describe('ListOfFootballersComponent', () => {
  let component: ListOfFootballersComponent;
  let fixture: ComponentFixture<ListOfFootballersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfFootballersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFootballersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

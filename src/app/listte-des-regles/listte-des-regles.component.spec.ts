import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListteDesReglesComponent } from './listte-des-regles.component';

describe('ListteDesReglesComponent', () => {
  let component: ListteDesReglesComponent;
  let fixture: ComponentFixture<ListteDesReglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListteDesReglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListteDesReglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

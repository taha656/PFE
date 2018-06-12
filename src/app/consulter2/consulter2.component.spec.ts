import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulter2Component } from './consulter2.component';

describe('Consulter2Component', () => {
  let component: Consulter2Component;
  let fixture: ComponentFixture<Consulter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

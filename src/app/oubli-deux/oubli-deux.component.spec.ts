import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OubliDeuxComponent } from './oubli-deux.component';

describe('OubliDeuxComponent', () => {
  let component: OubliDeuxComponent;
  let fixture: ComponentFixture<OubliDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OubliDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OubliDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

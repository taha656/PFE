import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OubliZeroComponent } from './oubli-zero.component';

describe('OubliZeroComponent', () => {
  let component: OubliZeroComponent;
  let fixture: ComponentFixture<OubliZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OubliZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OubliZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

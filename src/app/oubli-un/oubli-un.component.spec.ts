import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OubliUnComponent } from './oubli-un.component';

describe('OubliUnComponent', () => {
  let component: OubliUnComponent;
  let fixture: ComponentFixture<OubliUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OubliUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OubliUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

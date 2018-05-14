import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierColDeuxComponent } from './modifier-col-deux.component';

describe('ModifierColDeuxComponent', () => {
  let component: ModifierColDeuxComponent;
  let fixture: ComponentFixture<ModifierColDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierColDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierColDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

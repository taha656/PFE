import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierColComponent } from './modifier-col.component';

describe('ModifierColComponent', () => {
  let component: ModifierColComponent;
  let fixture: ComponentFixture<ModifierColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

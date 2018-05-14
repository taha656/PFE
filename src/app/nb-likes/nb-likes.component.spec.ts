import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbLikesComponent } from './nb-likes.component';

describe('NbLikesComponent', () => {
  let component: NbLikesComponent;
  let fixture: ComponentFixture<NbLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

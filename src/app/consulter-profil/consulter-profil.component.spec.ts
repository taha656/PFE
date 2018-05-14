import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProfilComponent } from './consulter-profil.component';

describe('ConsulterProfilComponent', () => {
  let component: ConsulterProfilComponent;
  let fixture: ComponentFixture<ConsulterProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

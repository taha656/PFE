import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSignaleComponent } from './publication-signale.component';

describe('PublicationSignaleComponent', () => {
  let component: PublicationSignaleComponent;
  let fixture: ComponentFixture<PublicationSignaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationSignaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationSignaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

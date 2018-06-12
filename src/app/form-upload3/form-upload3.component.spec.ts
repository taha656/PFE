import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpload3Component } from './form-upload3.component';

describe('FormUpload3Component', () => {
  let component: FormUpload3Component;
  let fixture: ComponentFixture<FormUpload3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpload3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpload3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

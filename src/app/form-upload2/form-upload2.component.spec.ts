import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpload2Component } from './form-upload2.component';

describe('FormUpload2Component', () => {
  let component: FormUpload2Component;
  let fixture: ComponentFixture<FormUpload2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpload2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpload2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

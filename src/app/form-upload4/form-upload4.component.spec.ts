import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpload4Component } from './form-upload4.component';

describe('FormUpload4Component', () => {
  let component: FormUpload4Component;
  let fixture: ComponentFixture<FormUpload4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpload4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpload4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

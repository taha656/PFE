import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAdmintopComponent } from './template-admintop.component';

describe('TemplateAdmintopComponent', () => {
  let component: TemplateAdmintopComponent;
  let fixture: ComponentFixture<TemplateAdmintopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAdmintopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAdmintopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

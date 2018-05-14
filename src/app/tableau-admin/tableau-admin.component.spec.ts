import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdminComponent } from './tableau-admin.component';

describe('TableauAdminComponent', () => {
  let component: TableauAdminComponent;
  let fixture: ComponentFixture<TableauAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

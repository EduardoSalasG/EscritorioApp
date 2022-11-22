import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenu4Component } from './sub-menu4.component';

describe('SubMenu4Component', () => {
  let component: SubMenu4Component;
  let fixture: ComponentFixture<SubMenu4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenu4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

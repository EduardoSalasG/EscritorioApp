import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenu6Component } from './sub-menu6.component';

describe('SubMenu6Component', () => {
  let component: SubMenu6Component;
  let fixture: ComponentFixture<SubMenu6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenu6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenu6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

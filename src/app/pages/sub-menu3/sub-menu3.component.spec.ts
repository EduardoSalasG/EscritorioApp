import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenu3Component } from './sub-menu3.component';

describe('SubMenu3Component', () => {
  let component: SubMenu3Component;
  let fixture: ComponentFixture<SubMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenu3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

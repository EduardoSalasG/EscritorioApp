import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenu5Component } from './sub-menu5.component';

describe('SubMenu5Component', () => {
  let component: SubMenu5Component;
  let fixture: ComponentFixture<SubMenu5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenu5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenu5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

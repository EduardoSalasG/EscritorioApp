import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarOpMenuComponent } from './cambiar-op-menu.component';

describe('CambiarOpMenuComponent', () => {
  let component: CambiarOpMenuComponent;
  let fixture: ComponentFixture<CambiarOpMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarOpMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarOpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

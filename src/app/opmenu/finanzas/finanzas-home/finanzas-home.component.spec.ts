import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasHomeComponent } from './finanzas-home.component';

describe('FinanzasHomeComponent', () => {
  let component: FinanzasHomeComponent;
  let fixture: ComponentFixture<FinanzasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

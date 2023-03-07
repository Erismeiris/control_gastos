import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarGastosComponent } from './insertar-gastos.component';

describe('InsertarGastosComponent', () => {
  let component: InsertarGastosComponent;
  let fixture: ComponentFixture<InsertarGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarGastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

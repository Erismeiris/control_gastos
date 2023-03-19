import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoPorMesesComponent } from './gasto-por-meses.component';

describe('GastoPorMesesComponent', () => {
  let component: GastoPorMesesComponent;
  let fixture: ComponentFixture<GastoPorMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoPorMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoPorMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

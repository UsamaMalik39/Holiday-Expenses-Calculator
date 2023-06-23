import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCalculatorComponent } from './expenses-calculator.component';

describe('ExpensesCalculatorComponent', () => {
  let component: ExpensesCalculatorComponent;
  let fixture: ComponentFixture<ExpensesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ExpensesCalculationService } from '../services/expenses-calculation.service';

@Component({
  selector: 'app-expenses-calculator',
  templateUrl: './expenses-calculator.component.html',
  styleUrls: ['./expenses-calculator.component.scss'],
})
export class ExpensesCalculatorComponent implements OnInit {
  submitted = false;
  expensesArray: any = new FormArray([]);
  formForExpenses: any = null;
  payouts: any = [];
  summary: any = {};
  imageUrl: any = '../../../../assets/bunk.png';
  constructor(
    public _fb: FormBuilder,
    private _calculatorSrv: ExpensesCalculationService
  ) {
    const singleExpense = this.createItem();
    this.formForExpenses = this._fb.group({
      arr: this._fb.array([singleExpense]),
    });
  }

  ngOnInit(): void {}
  /*##################### Expense Form #####################*/
  createItem(): any {
    return this._fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.pattern('^[_A-z]*((-|s)*[_A-z])*$'),
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      amount: [
        null,
        [Validators.required, Validators.min(1), Validators.maxLength(5)],
      ],
    });
  }

  deleteExpense(index: number) {
    this.expensesArray.removeAt(index);
    this.submitted = false;
  }
  addExpense() {
    this.submitted = false;
    this.expensesArray = this.formForExpenses.get('arr') as FormArray;
    this.expensesArray.push(this.createItem());
  }

  // Getter method to access formcontrols
  get getexpensesArray(): any {
    return this.formForExpenses.get('arr') as FormArray;
  }

  // Submit
  onSubmit() {
    if (!this.formForExpenses.valid) {
      this.submitted = true;
    } else {
      this._calculatorSrv
        .getExpensesCalculation(this.expensesArray?.value)
        .subscribe((data: any) => {
          if (!data.error) {
            this.summary = data.data;
            this.payouts = data.data.payouts;
          }
          this.submitted = false;
        });
    }
  }
}

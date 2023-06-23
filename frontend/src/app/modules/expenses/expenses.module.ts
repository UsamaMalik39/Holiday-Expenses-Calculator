import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesCalculatorComponent } from './expenses-calculator/expenses-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExpensesCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,    
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }

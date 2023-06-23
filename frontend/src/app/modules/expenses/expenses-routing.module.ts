import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesCalculatorComponent } from './expenses-calculator/expenses-calculator.component';

const routes: Routes = [
  {
    path:'',component:ExpensesCalculatorComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }

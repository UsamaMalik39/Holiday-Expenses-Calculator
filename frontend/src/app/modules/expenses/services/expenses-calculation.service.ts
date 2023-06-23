import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpensesCalculationService {

  constructor(private http: HttpClient) { }

  backendURL:string=environment.backEndURL;
  getExpensesCalculation(data:any){
    return this.http.post(this.backendURL+'payouts', {expenses: data});
  }
}

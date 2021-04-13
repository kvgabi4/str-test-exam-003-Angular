import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = 'https://nettuts.hu/jms/kvgabi4/customers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  };

  get(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  };

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer)
  };

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  };

  delete(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}/${customer.id}`)
  }
}

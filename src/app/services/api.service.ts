import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientType } from '../enums/client-type.enum';
import { Book } from '../models/book';
import { Customer } from '../models/customer';
import { Library } from '../models/library';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //************************* LOGIN API *****************************

  login(clientType: ClientType, userEmail: string, userPassword: string) {
    return this.httpClient.post("http://localhost:8080/login/login/" + clientType + "/" + userEmail + "/" + userPassword, null, { responseType: 'text' });
  }

  //************************* LOGOUT API ****************************

  //************************* Is Active? API ************************

  //************************* ADMIN API *****************************
  public addLibrary(library: Library) {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.post("http://localhost:8080/api/admin/add-company", library, { headers: httpHeaders });
  }

  public getAllLibraries(): Observable<Library[]> {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.get<Library[]>('http://localhost:8080/api/admin/get-all-libraries', { headers: httpHeaders });
  }

  public deleteLibrary(libraryId: number) {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.delete('http://localhost:8080/api/admin/delete-library/' + libraryId, { headers: httpHeaders,responseType:'text'});
  }

  public deleteCustomer(customerId: number) {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.delete('http://localhost:8080/api/admin/delete-customer/' + customerId, { headers: httpHeaders, responseType: 'text' });
  }

  public getAllCustomers():Observable<Customer[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.get<Customer[]>('http://localhost:8080/api/admin/get-all-customers', { headers: httpHeaders });
  }

  public deleteBook(bookId:number){
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.get<Customer[]>('http://localhost:8080/api/admin/delete-book/'+bookId, { headers: httpHeaders });
  }

    //************************* CUSTOMER API *****************************

  public getAllCustomerBooks():Observable<Book[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.get<Book[]>('http://localhost:8080/api/customer/get-all-customer-books', { headers: httpHeaders });
  }

  public deleteCustomerBook(bookId:number){
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.delete('http://localhost:8080/api/customer/delete-customer-book/'+bookId, { headers: httpHeaders });
  }

}

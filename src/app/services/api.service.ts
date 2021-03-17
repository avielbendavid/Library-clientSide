import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientType } from '../enums/client-type.enum';
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
    return this.httpClient.delete('http://localhost:8080/api/admin/remove-library/' + libraryId, { headers: httpHeaders,responseType:'text'});
  }

  public deleteCustomer(customerId: number) {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.delete('http://localhost:8080/api/admin/delete-customer/' + customerId, { headers: httpHeaders, responseType: 'text' });
  }

  public getAllCustomers():Observable<Customer[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.get<Customer[]>('http://localhost:8080/api/admin/get-all-customers', { headers: httpHeaders });
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Library } from '../models/library';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //************************* LOGIN API *****************************

  // login(userEmail: string, userPassword: string, clientType: ClientType) {
  //   return this.httpClient.post("http://localhost:8080/login/login/" + userEmail + "/" + userPassword + "/" + clientType, null, { responseType: 'text' });
  // }

  //************************* LOGOUT API ****************************

  //************************* Is Active? API ************************

  //************************* ADMIN API *****************************
  public addLibrary(library: Library) {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.httpClient.post("http://localhost:8080/api/admin/add-company", library, { headers: httpHeaders });
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientType } from '../enums/client-type.enum';
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


}

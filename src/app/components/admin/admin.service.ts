import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  librariesTableColumns: string[] = ['id', 'name', 'city'];
  customersTableColumns: string[] = ['id', 'name', 'age', 'email', 'password'];
  booksTableColumns: string[] = ['id', 'name', 'price', 'pages', 'quantity'];
  constructor() { }
}

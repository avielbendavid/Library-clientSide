import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  librariesTableColumns:string[]=['id','name','city'];
  customersTableColumns:string[]=['id','name'];
  booksTableColumns:string[]=['id','name','city'];
  constructor() { }
}

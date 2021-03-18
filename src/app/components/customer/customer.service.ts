import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerBooksTableColumns:string[]=['id','name','price'];
  constructor() { }
}

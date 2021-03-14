import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  tableColumn:string[]=['id','name','city'];
  constructor() { }
}

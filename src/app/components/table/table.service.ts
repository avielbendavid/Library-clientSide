import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  // libraries:boolean;
  // custumers:boolean;
  // libraryBooks:boolean;
  // customerBooks:boolean;
  status:string="";
  constructor() { }

  refresh(){
    // this.libraries=false;
    // this.custumers=false;
    // this.libraryBooks=false;
    // this.customerBooks=false;
  }
}

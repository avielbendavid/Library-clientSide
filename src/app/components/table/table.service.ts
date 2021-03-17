import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  // libraries:boolean;
  // custumers:boolean;
  // libraryBooks:boolean;
  // customerBooke:boolean;
  status:string="";
  constructor() { }

  refresh(){
    // this.libraries=false;
    // this.custumers=false;
    // this.libraryBooks=false;
    // this.customerBooke=false;
  }
}

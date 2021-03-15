import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public tableColumn:string[];
  @Input() public tableData:object[];
  @Output() deleteLibrary:EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteLibraryBook:EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomer:EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomerBook:EventEmitter<number> = new EventEmitter<number>();

  properties:string[];
  constructor() { }

  ngOnInit(): void {
    // this.properties=Object.getOwnPropertyNames(this.tableData[0]);
    this.properties=this.tableColumn;
  }

  delete(libraryId:number){
    if(localStorage.getItem("userType")=="ADMIN"){
      this.deleteLibrary.emit(libraryId);
    }
  }
  edit(){

  }

}

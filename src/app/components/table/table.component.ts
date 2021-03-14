import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public tableColumn:string[];
  @Input() public tableData:object[];
  properties:string[];
  constructor() { }

  ngOnInit(): void {
    // this.properties=Object.getOwnPropertyNames(this.tableData[0]);
    this.properties=this.tableColumn;
  }

}

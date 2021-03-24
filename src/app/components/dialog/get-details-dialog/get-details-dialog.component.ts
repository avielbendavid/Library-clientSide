import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-details-dialog',
  templateUrl: './get-details-dialog.component.html',
  styleUrls: ['./get-details-dialog.component.css']
})
export class GetDetailsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public obj:Object) { }

  properties:string[]=Object.getOwnPropertyNames(this.obj);
  ngOnInit(): void {
    console.log(this.properties);
  }

}

import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/models/library';
import { ApiService } from 'src/app/services/api.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   libraries: Library[] = [];
   columns:string[]=[];

   constructor(
     private adminService:AdminService,
     private apiService:ApiService){}
   
   ngOnInit(): void {
    this.columns=this.adminService.tableColumn;
    this.apiService.getAllLibraries().subscribe(
      (libraries)=>{
        this.libraries=libraries;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}

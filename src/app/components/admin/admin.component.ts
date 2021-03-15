import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/models/library';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error.service';
import { TableService } from '../table/table.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  libraries: Library[] = [];
  columns: string[] = [];

  constructor(
    private adminService: AdminService,
    private apiService: ApiService,
    private errorService: ErrorService,
    private tableService: TableService) { }

  ngOnInit(): void {
    this.columns = this.adminService.tableColumn;
    this.apiService.getAllLibraries().subscribe(
      (libraries) => { this.libraries = libraries; this.tableService.libraries=true;},
      (error) => { this.errorService.handleError(error) }
    );
  }

  deleteLibrary(libraryId: number) {
    this.apiService.deleteLibrary(libraryId).subscribe(
      (response) => { },
      (error) => { this.errorService.handleError(error) }
    );
  }
  deleteLibraryBook() {
    // this.apiService.
  }
  deleteCustomer() {
    // this.apiService.
  }

}

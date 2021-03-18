import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
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
  librariesTableColumns: string[] = [];
  librariesTableData: Library[] = [];
  customersTableColumns: string[] = [];
  customersTableData: Customer[] = [];
  booksTableColumns: string[] = [];
  booksTableData: Library[] = [];

  constructor(
    private adminService: AdminService,
    private apiService: ApiService,
    private errorService: ErrorService,
    private tableService: TableService,
    private router: Router) { }

  ngOnInit(): void {
    this.tableService.status = "libraries";
    this.refreshLibrariesTable();
    this.refreshCustomersTable();
    this.refreshBooksTable();
  }

  refreshLibrariesTable() {
    this.librariesTableColumns = this.adminService.librariesTableColumns;
    this.apiService.getAllLibraries().subscribe(
      (libraries) => { this.librariesTableData = libraries; },
      (error) => { this.errorService.handleError(error) }
    );
  }
  refreshCustomersTable() {
    this.customersTableColumns = this.adminService.customersTableColumns;
    this.apiService.getAllCustomers().subscribe(
      (customers) => { this.customersTableData = customers; },
      (error) => { this.errorService.handleError(error) }
    );
  }
  refreshBooksTable() {
  }
  deleteLibrary(libraryId: number) {
    this.apiService.deleteLibrary(libraryId).subscribe(
      (response) => { this.refreshLibrariesTable() },
      (error) => { this.errorService.handleError(error) }
    );
  }
  deleteBook(bookId: number) {
    this.apiService.deleteBook(bookId).subscribe(
      () => { },
      () => { }
    );
  }
  deleteCustomer(customerId: number) {
    this.apiService.deleteCustomer(customerId).subscribe(
      (response) => { this.refreshCustomersTable() },
      (error) => { this.errorService.handleError(error) }
    );
  }

  IndexChanged(index: number) {
    switch (index) {
      case 0:
        this.tableService.status = 'libraries';
        break;
      case 1:
        this.tableService.status = 'customers';
        break;
      case 2:
        this.tableService.status = 'books';
        break;
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

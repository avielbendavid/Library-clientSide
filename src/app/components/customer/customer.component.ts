import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error.service';
import { TableService } from '../table/table.service';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  booksTableData: Book[] = [];
  booksTableColumn: string[] = [];
  constructor(private router: Router,
    private tableService: TableService,
    private customerService: CustomerService,
    private apiService: ApiService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.tableService.status = "customerBooks";
    this.refreshBooksTable();
  }
  refreshBooksTable() {
    this.booksTableColumn = this.customerService.customerBooksTableColumns;
    this.apiService.getAllCustomerBooks().subscribe(
      (books) => { this.booksTableData = books; },
      (error) => { this.errorService.handleError(error); }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  delete(bookId: number) {
    this.apiService.deleteCustomerBook(bookId).subscribe(
      (response) => { this.refreshBooksTable(); },
      (error) => { this.errorService.handleError(error); console.log(error); }
    );
  }

}

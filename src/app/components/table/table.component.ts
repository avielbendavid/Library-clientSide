import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Library } from 'src/app/models/library';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error.service';
import { ConfirmationDialogComponent } from '../dialog/confirmation-dialog/confirmation-dialog.component';
import { GetDetailsDialogComponent } from '../dialog/get-details-dialog/get-details-dialog.component';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public tableColumn: string[];
  @Input() public tableData: object[];
  @Output() deleteLibrary: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteBook: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomer: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomerBook: EventEmitter<number> = new EventEmitter<number>();

  properties: string[];
  constructor(private tableService: TableService,
    private dialog: MatDialog,
    private apiService: ApiService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    // this.properties=Object.getOwnPropertyNames(this.tableData[0]);
    this.properties = this.tableColumn;
  }

  delete(id: number) {
    console.log(this.tableService.status);
    const status = this.tableService.status;
    switch (status) {
      case 'libraries':
        this.dialog.open(ConfirmationDialogComponent, {
          data: "Are you sure you want to delete this library?"
          , panelClass: 'dialogPanel', backdropClass: 'dark', width: '500px', height: '250px'
        }).afterClosed().subscribe(
          (result: boolean) => {
            if (result) {
              this.deleteLibrary.emit(id);
              console.log('from libraries case');
            }
          });
        break;
      case 'customers':
        this.dialog.open(ConfirmationDialogComponent, {
          data: "Are you sure you want to delete this customer?"
          , panelClass: 'dialogPanel', backdropClass: 'dark', width: '500px', height: '250px'
        }).afterClosed().subscribe(
          (result: boolean) => {
            if (result) {
              this.deleteCustomer.emit(id);
              console.log('from customers case');
            }
          });
        break;
      case 'books':
        this.dialog.open(ConfirmationDialogComponent, {
          data: "Are you sure you want to delete this book?"
          , panelClass: 'dialogPanel', backdropClass: 'dark', width: '500px', height: '250px'
        }).afterClosed().subscribe(
          (result: boolean) => {
            if (result) {
              this.deleteBook.emit(id);
              console.log('from libraryBooks case');
            }
          });
        break;
      case 'customerBooks':
        this.dialog.open(ConfirmationDialogComponent, {
          data: "Are you sure you want to return your book?"
          , panelClass: 'dialogPanel', backdropClass: 'dark', width: '500px', height: '250px'
        }).afterClosed().subscribe(
          (result: boolean) => {
            if (result) {
              this.deleteCustomerBook.emit(id);
              console.log('from customerBooks case');
            }
          });
        break;
    }
  }



  getDetails(property: any, obj: Object) {
    if (property == "id") {
      console.log(property);
      console.dir(property);


      this.dialog.open(GetDetailsDialogComponent, { data: obj, panelClass: 'dialogPanel', backdropClass: 'dark', width: '400px', height: '550px' });
    }
  }

  // getDetails(property: any, obj: Object) {
  //   if (property == "id") {
  //     console.log(obj[property]);
  //     const status = this.tableService.status;
  //     let objFromDB: Object;
  //     switch (status) {
  //       case 'libraries':
  //         this.apiService.getOneLibrary(obj[property]).subscribe(
  //           (library) => { objFromDB = library },
  //           (error) => { this.errorService.handleError(error) }
  //         );
  //         break;
  //       case 'customers':
  //         this.apiService.getOneLibrary(property).subscribe(
  //           (customer) => { objFromDB = customer },
  //           (error) => { this.errorService.handleError(error) }
  //         );
  //         break;
  //       case 'books':
  //         this.apiService.getOneLibrary(property).subscribe(
  //           (book) => { objFromDB = book },
  //           (error) => { this.errorService.handleError(error) }
  //         );
  //         break;
  //       case 'customerBooks':
  //         this.apiService.getOneLibrary(property).subscribe(
  //           (customerBook) => { objFromDB = customerBook },
  //           (error) => { this.errorService.handleError(error) }
  //         );
  //         break;
  //     }
  //     this.dialog.open(GetDetailsDialogComponent, { data: obj, panelClass: 'dialogPanel', backdropClass: 'dark', width: '400px', height: '550px' });
  //   }
  // }
  edit() {

  }

}

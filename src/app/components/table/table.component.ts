import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../dialog/confirmation-dialog/confirmation-dialog.component';
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
  @Output() deleteLibraryBook: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomer: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCustomerBook: EventEmitter<number> = new EventEmitter<number>();

  properties: string[];
  constructor(private tableService: TableService,
    private dialog: MatDialog) { }

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
          , panelClass: 'dialogPanel', backdropClass: 'dark',width:'500px',height:'250px'
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
          , panelClass: 'dialogPanel', backdropClass: 'dark'
        }).afterClosed().subscribe(
          (result: boolean) => {
            if (result) {
              this.deleteCustomer.emit(id);
              console.log('from customers case');
            }
          });
          break;
          case 'libraryBooks':
            this.dialog.open(ConfirmationDialogComponent, {
              data: "Are you sure you want to delete this book?"
              , panelClass: 'dialogPanel', backdropClass: 'dark'
            }).afterClosed().subscribe(
              (result: boolean) => {
                if (result) {
                  this.deleteLibraryBook.emit(id);
                  console.log('from libraryBooks case');
                }
              });
              break;
              case 'customersBooks':
                this.dialog.open(ConfirmationDialogComponent, {
                  data: "Are you sure you want to return your book?"
                  , panelClass: 'dialogPanel', backdropClass: 'dark'
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
  edit() {

  }

}

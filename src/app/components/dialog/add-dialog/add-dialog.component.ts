import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookCategory } from 'src/app/enums/book-category.enum';
import { Book } from 'src/app/models/book';
import { Customer } from 'src/app/models/customer';
import { Library } from 'src/app/models/library';
import { ApiService } from 'src/app/services/api.service';
import { ApplicationService } from 'src/app/services/application.service';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  status: string;
  addLibraryFormGroup: FormGroup;
  addCustomerFormGroup: FormGroup;
  addBookFormGroup: FormGroup;
  categories = BookCategory;

  constructor(
    private applicationService: ApplicationService,
    private fb: FormBuilder,
    private tableService: TableService,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddDialogComponent>
  ) { }

  ngOnInit(): void {
    this.status = this.tableService.status;
    this.buildAddLibraryFormGroup();
    this.buildAddCustomerFormGroup();
    this.buildAddBookFormGroup();
  }

  buildAddLibraryFormGroup() {
    this.addLibraryFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*)')]],
      city: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*)')]],
    });
  }

  buildAddCustomerFormGroup() {
    this.addCustomerFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*)')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }

  buildAddBookFormGroup() {
    this.addBookFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*)')]],
      category: ['', Validators.required],
      pages: ['', [Validators.required, Validators.min(0), Validators.max(500)]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      quantity: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(2000)]]
    });
  }

  addLibrary() {
    const fr = this.addLibraryFormGroup.value;
    const library: Library = {
      name: fr.name,
      city: fr.city
    }
    this.apiService.addLibrary(library).subscribe(
      (success) => { alert(success); },
      (error) => { alert(error); }
    );
  }
  addCustomer() {
    const fr = this.addCustomerFormGroup.value;
    const customer: Customer = {
      name: fr.name,
      age: fr.age,
      email: fr.email,
      password: fr.password
    }
    this.apiService.addCustomer(customer).subscribe(
      (success) => { alert(success); this.dialogRef.close(); },
      (error) => { alert(error); }
    );
  }
  addBook() {
    const fr = this.addLibraryFormGroup.value;
    const book: Book = {
      name: fr.name,
      category: fr.category,
      pages: fr.pages,
      price: fr.price,
      quantity: fr.quantity
    }
    this.apiService.addBook(book).subscribe(
      (success) => { alert(success); },
      (error) => { alert(error); }
    );
  }


}

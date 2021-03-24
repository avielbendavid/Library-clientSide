import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private applicationService: ApplicationService,
    private fb: FormBuilder,
    private tableService: TableService,
    private apiService: ApiService
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
  addBook() {
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


}

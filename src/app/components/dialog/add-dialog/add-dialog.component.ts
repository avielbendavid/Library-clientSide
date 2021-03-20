import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  isCustomer: boolean;
  isAdministrator: boolean;
  constructor(
    private applicationService: ApplicationService,
  ) { }

  ngOnInit(): void {
    this.checkStatus();
  }

  checkStatus() {
    // if ()
  }

}

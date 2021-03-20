import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PersonalZoneComponent } from './components/personal-zone/personal-zone.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLibraryDialogComponent } from './components/dialog/add-library-dialog/add-library-dialog.component';
import { ConfirmationDialogComponent } from './components/dialog/confirmation-dialog/confirmation-dialog.component';
import { ResponseComponent } from './components/response/response.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditDialogComponent } from './components/dialog/edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './components/dialog/add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    AdminComponent,
    CustomerComponent,
    PersonalZoneComponent,
    ConfirmationDialogComponent,
    AddLibraryDialogComponent,
    ResponseComponent,
    ContactComponent,
    EditDialogComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

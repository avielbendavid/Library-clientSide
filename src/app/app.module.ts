import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PersonalZoneComponent } from './components/personal-zone/personal-zone.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/dialog/confirmation-dialog/confirmation-dialog.component';
import { ResponseComponent } from './components/response/response.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditDialogComponent } from './components/dialog/edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './components/dialog/add-dialog/add-dialog.component';
import { GetDetailsDialogComponent } from './components/dialog/get-details-dialog/get-details-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { CardsComponent } from './components/cards/cards.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



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
    ResponseComponent,
    ContactComponent,
    EditDialogComponent,
    AddDialogComponent,
    GetDetailsDialogComponent,
    CardsComponent
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
    ReactiveFormsModule,
    MatSelectModule, 
    MatSlideToggleModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminZoneComponent } from './components/admin-zone/admin-zone.component';
import { CustomerZoneComponent } from './components/customer-zone/customer-zone.component';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PersonalZoneComponent } from './components/personal-zone/personal-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginComponent,
    AdminZoneComponent,
    CustomerZoneComponent,
    TableComponent,
    AdminComponent,
    CustomerComponent,
    PersonalZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

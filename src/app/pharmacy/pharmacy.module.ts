import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PatientSelectComponent } from './patient-select/patient-select.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PatientSelectComponent,
    PharmacyRoutingModule,
    AppComponent
  ],
  providers: []
})
export class PharmacyModule { }

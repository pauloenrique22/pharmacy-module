import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PatientSelectComponent } from './patient-select/patient-select.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
//import { AddPrescriptionComponent } from './add-prescription/add-prescription.component'; //linking the addPrescriptionComponent
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PharmacyRoutingModule,
    AppComponent,
    PatientSelectComponent,
    PrescriptionListComponent,
//    AddPrescriptionComponent,
    PrescriptionDetailComponent,
  ],
  providers: [],
})
export class PharmacyModule { }
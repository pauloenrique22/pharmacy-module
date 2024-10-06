import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientSelectComponent } from './pharmacy/patient-select/patient-select.component';
import { PrescriptionListComponent } from './pharmacy/prescription-list/prescription-list.component';
import { PrescriptionDetailComponent } from './pharmacy/prescription-detail/prescription-detail.component';


export const routes: Routes = [
  { path: 'select-patient', component: PatientSelectComponent },
  { path: 'prescriptions/:patientId', component: PrescriptionListComponent },
  { path: 'prescription/:id', component: PrescriptionDetailComponent },
  { path: '', redirectTo: '/select-patient', pathMatch: 'full' } 
];
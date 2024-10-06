import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSelectComponent } from './patient-select/patient-select.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';

const routes: Routes = [
  { path: '', component: PatientSelectComponent },
  { path: 'prescriptions/:patientId', component: PrescriptionListComponent },
  { path: 'prescription-detail/:prescriptionId', component: PrescriptionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }

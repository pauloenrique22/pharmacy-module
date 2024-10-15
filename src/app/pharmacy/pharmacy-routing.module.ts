import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSelectComponent } from './patient-select/patient-select.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';
//import { AddPrescriptionComponent } from './add-prescription/add-prescription.component'; // importing the add Prescription component

const routes: Routes = [
  { path: '', component: PatientSelectComponent },
  { path: 'prescriptions/:patientId', component: PrescriptionListComponent },
  { path: 'prescription-detail/:prescriptionId', component: PrescriptionDetailComponent },
  //{ path: 'add-prescription', component: AddPrescriptionComponent} //connecting add-prescription 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }

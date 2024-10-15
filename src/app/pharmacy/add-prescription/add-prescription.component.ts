import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PharmacyService } from '../pharmacy.service';
import { Patient } from '../patient-select/patient';
import {Doctor, Prescription} from '../prescription-list/prescription'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrescriptionDetails } from '../prescription-detail/prescription-detail';
import { forkJoin} from 'rxjs';

@Component({
  selector: 'app-add-prescription',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css'],
})
export class AddPrescriptionComponent implements OnInit{
    prescription: Prescription = {
        id: 0, // You can set this to auto-increment on the server
        patient_id: 0,
        doctor_id: 0,
        date_prescriptions: new Date(),
    };

    prescriptionDetail: PrescriptionDetails={
        id: 0,
        prescriptions_id: 0, // This will be set after saving the prescription
        medication: '',
        dosage: '',
        frequency: '',
    }

  doctors:Doctor[] = [];
  patients:Patient[] = [];

  constructor(private http: HttpClient, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.pharmacyService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
    this.pharmacyService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  onSubmit(): void {
    console.log("button submit triggered")
    this.addNewPrescriptionAndDetails(this.prescription, this.prescriptionDetail);
  }

  addNewPrescriptionAndDetails(newPrescription: Prescription, detail: PrescriptionDetails) {
    // Step 1: Add the prescription and get the generated ID
    this.pharmacyService.addPrescription(newPrescription).subscribe(
      (createdPrescription) => {
        console.log('Prescription created:', createdPrescription);

        console.log('id prescription', createdPrescription.id)
  
        detail.prescriptions_id = createdPrescription.id;

        this.pharmacyService.addPrescriptionDetail(detail).subscribe(
          (createdDetail) =>{
            console.log('Prescription detail created: ', createdDetail);
            alert('Prescription detail has been successfully added!');
          },
          (error) =>{
            console.error('Error creating prescription detail: ', error);
          }
        )
      },
      (error) => {
        console.error('Error creating prescription:', error);
      }
    );
  }

}



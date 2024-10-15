import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { PharmacyService } from '../pharmacy.service';
import { Patient } from './patient';
import { AddPrescriptionComponent } from '../add-prescription/add-prescription.component';



@Component({
  selector: 'app-patient-select',
  standalone: true,
  imports: [CommonModule, FormsModule, AddPrescriptionComponent],
  templateUrl: './patient-select.component.html',
  styleUrl: './patient-select.component.css'
})
export class PatientSelectComponent implements OnInit {
  
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  searchTerm: string = '';
  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.pharmacyService.getPatients().subscribe((patients) => {
      this.patients = patients;
      this.filteredPatients = [...this.patients];
    });
  }
  
  filterPatients() {
    debugger;
    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

 
  selectPatient(patientId: number): void {
    this.router.navigate(['/prescriptions', patientId]);
  }


 
}

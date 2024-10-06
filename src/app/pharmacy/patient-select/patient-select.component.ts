import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacyService } from '../pharmacy.service';
import { Patient } from './patient';


@Component({
  selector: 'app-patient-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-select.component.html',
  styleUrl: './patient-select.component.css'
})
export class PatientSelectComponent implements OnInit {
  
  patients: Patient[] = [];
  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.pharmacyService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
  
  selectPatient(patientId: number): void {
    this.router.navigate(['/prescriptions', patientId]);
  }
 
}

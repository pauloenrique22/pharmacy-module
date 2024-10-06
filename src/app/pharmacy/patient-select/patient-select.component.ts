import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';


@Component({
  selector: 'app-patient-select',
  //standalone: true,
  //imports: [],
  templateUrl: './patient-select.component.html',
  styleUrl: './patient-select.component.css'
})
export class PatientSelectComponent implements OnInit {
  patients: any[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 40 },
    { id: 4, name: 'Bob Brown', age: 50 },
    { id: 5, name: 'Charlie White', age: 60 }
  ];

  constructor(private pharmacyService: PharmacyService, private router: Router) {}

  ngOnInit(): void {
    this.pharmacyService.getPatients().subscribe(data => this.patients = data);
  }

  selectPatient(patientId: number): void {
    this.router.navigate(['/pharmacy/prescriptions', patientId]);
  }

}

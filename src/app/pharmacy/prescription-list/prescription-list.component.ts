import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { PharmacyService } from '../pharmacy.service';
import { Prescription } from './prescription';

@Component({
  selector: 'app-prescription-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})
export class PrescriptionListComponent implements OnInit {
  
  prescriptions: Prescription[] = [];
  filteredPrescriptions: Prescription[] = [];
  searchTerm: string = '';
  searchType: string = 'id'; // Default (ID)

  patientId: number = 0;

  constructor(private pharmacyService: PharmacyService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params => {
      this.patientId = +params.get('patientId')!;
      this.pharmacyService.getPrescriptionsByPatient(this.patientId).subscribe((prescriptions) => {
        this.prescriptions = prescriptions;
        this.filteredPrescriptions = [...this.prescriptions];
      });
    });
  }

  filterPrescriptions() {
    const searchTermLower = this.searchTerm.toLowerCase();

    this.filteredPrescriptions = this.prescriptions.filter(prescription => {
      if (this.searchType === 'id') {
        return prescription.id.toString().includes(this.searchTerm);
      } else if (this.searchType === 'date') {
        const dateString = new Date(prescription.date_prescriptions).toISOString().split('T')[0]; 
        return dateString.includes(this.searchTerm);
      } else if (this.searchType === 'doctorName') {
        return prescription.doctor?.name.toLowerCase().includes(searchTermLower);
      }
      return false;
    });
  }

  viewPrescriptionDetails(prescriptionId: number) {
    this.router.navigate(['/prescription-details', prescriptionId]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacyService } from '../pharmacy.service';
import { Prescription } from './prescription';

@Component({
  selector: 'app-prescription-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})
export class PrescriptionListComponent implements OnInit {
  
  prescriptions: Prescription[] = [];
  patientId: number = 0;

  constructor(private pharmacyService: PharmacyService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    //debugger
    this.route.paramMap.subscribe(params => {
      this.patientId = +params.get('patientId')!;
      this.pharmacyService.getPrescriptionsByPatient(this.patientId).subscribe((prescriptions) => {
        this.prescriptions = prescriptions;
      });
    });
  }

  viewPrescriptionDetails(prescriptionId: number) {
    this.router.navigate(['/prescription-details', prescriptionId]);
  }

}

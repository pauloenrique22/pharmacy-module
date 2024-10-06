import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-prescription-list',
  //standalone: true,
  //imports: [],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})
export class PrescriptionListComponent implements OnInit {
  prescriptions: any[] = [];
  patientId: number = 0;

  constructor(
    private pharmacyService: PharmacyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = +this.route.snapshot.paramMap.get('patientId')!;
    this.pharmacyService.getPrescriptionsByPatient(this.patientId).subscribe(data => this.prescriptions = data);
  }

  viewPrescriptionDetails(prescriptionId: number): void {
    this.router.navigate(['/pharmacy/prescription-detail', prescriptionId]);
  }
}

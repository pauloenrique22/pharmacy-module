import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-prescription-detail',
  //standalone: true,
  //imports: [],
  templateUrl: './prescription-detail.component.html',
  styleUrl: './prescription-detail.component.css'
})
export class PrescriptionDetailComponent implements OnInit{
  prescriptionDetails: any;

  constructor(private pharmacyService: PharmacyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const prescriptionId = +this.route.snapshot.paramMap.get('prescriptionId')!;
    this.pharmacyService.getPrescriptionDetails(prescriptionId).subscribe(data => this.prescriptionDetails = data);
  }

}

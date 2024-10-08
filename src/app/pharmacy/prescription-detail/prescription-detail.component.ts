import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacyService } from '../pharmacy.service';
import { PrescriptionDetails } from './prescription-detail';

@Component({
  selector: 'app-prescription-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescription-detail.component.html',
  styleUrl: './prescription-detail.component.css'
})
export class PrescriptionDetailComponent implements OnInit{
  
  prescriptionDetails: PrescriptionDetails[] = [];
  prescriptionId: number = 0;

  constructor(private pharmacyService: PharmacyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //debugger;
    this.route.paramMap.subscribe(params => {
      this.prescriptionId = +params.get('prescriptionId')!;
      this.pharmacyService.getPrescriptionDetails(this.prescriptionId).subscribe((prescriptionDetails) => {
        this.prescriptionDetails = prescriptionDetails;
        console.log(this.prescriptionDetails);
      });
    }); 
  }

  

}

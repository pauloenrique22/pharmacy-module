import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacyService } from '../pharmacy.service';


@Component({
  selector: 'app-patient-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-select.component.html',
  styleUrl: './patient-select.component.css'
})
export class PatientSelectComponent implements OnInit {
  patients: any[] = [];

  selectedPatients: Set<number> = new Set(); // Conjunto para manter os IDs dos pacientes selecionados

  constructor(private pharmacyService: PharmacyService, private router: Router) {}

  ngOnInit(): void {
    this.pharmacyService.getPatients().subscribe(data => this.patients = data);
  }

  // selectPatient(patientId: number): void {
  //   this.router.navigate(['/pharmacy/prescriptions', patientId]);
  // }
  selectPatient(patientId: number): void {
    // Alterna a seleção do paciente
    // if (this.selectedPatients.has(patientId)) {
    //   this.selectedPatients.delete(patientId); // Desmarcar se já estiver selecionado
    // } else {
    //   this.selectedPatients.add(patientId); // Marcar se não estiver selecionado
    // }
    this.router.navigate(['/pharmacy/prescriptions', patientId]);
  }

  // Método para obter os IDs dos pacientes selecionados
  getSelectedPatients(): number[] {
    return Array.from(this.selectedPatients);
  }

}

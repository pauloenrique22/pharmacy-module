import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from './patient-select/patient';
import { HttpClient } from '@angular/common/http';
import { Prescription } from './prescription-list/prescription';
import { PrescriptionDetails } from './prescription-detail/prescription-detail';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http : HttpClient) { }
  
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patients`);
  }

  getPrescriptionsByPatient(patientId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/prescriptions?patient_id=${patientId}`);
  }

  getPrescriptionDetails(prescriptionId: number): Observable<PrescriptionDetails[]> {
    return this.http.get<PrescriptionDetails[]>(`${this.apiUrl}/prescription-details?prescriptionId=${prescriptionId}`);
  }
}

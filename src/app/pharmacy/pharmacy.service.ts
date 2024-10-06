import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './patient-select/patient';
import { HttpClient } from '@angular/common/http';
import { Prescription, Doctor } from './prescription-list/prescription';
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
    return forkJoin({
      prescriptions: this.http.get<Prescription[]>(`${this.apiUrl}/prescriptions?patient_id=${patientId}`),
      doctors: this.http.get<Doctor[]>(`${this.apiUrl}/doctors`)
    }).pipe(
      map(({ prescriptions, doctors }) => {
        let prescriptionsWithDoctor = prescriptions.map(prescription => ({
          ...prescription,
          doctor: doctors.find(doctor => doctor.id === prescription.doctor_id)
        }));

      return prescriptionsWithDoctor.sort((a, b) => b.id - a.id);
      })
    );
  }

  getPrescriptionDetails(prescriptionId: number): Observable<PrescriptionDetails[]> {
    return this.http.get<PrescriptionDetails[]>(`${this.apiUrl}/prescription-details?prescriptions_id=${prescriptionId}`);
  }
}

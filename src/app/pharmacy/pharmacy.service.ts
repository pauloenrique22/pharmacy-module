import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
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

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`);
  }

  addPrescription(prescription: Prescription): Observable<Prescription> {
    return this.getPrescriptions().pipe(
      take(1),
      switchMap((prescriptions) => {
        // Determine the next ID
        const newId = prescriptions.length ? Math.max(...prescriptions.map(p => p.id)) + 1 : 1;
        prescription.id = newId; // Set the new ID

        // Save back to db.json
        return this.http.post<Prescription>(`${this.apiUrl}/prescriptions`, prescription).pipe(map(() => prescription));
      })
    );
  }

  addPrescriptionDetail(detail: PrescriptionDetails): Observable<PrescriptionDetails> {
    return this.getAllPrescriptionDetails().pipe(
      take(1),
      switchMap((details) => {
        const newId = details.length ? Math.max(...details.map(d => d.id)) + 1 : 1;
        detail.id = newId; // Set the new ID
        // Save back to db.json
        return this.http.post<PrescriptionDetails>(`${this.apiUrl}/prescription-details`, detail).pipe(map(() => detail));
      })
    );
  }
  getPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/prescriptions`);
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

  getAllPrescriptionDetails(): Observable<PrescriptionDetails[]> {
    // Implement a method to fetch prescription details similarly
    return this.http.get<PrescriptionDetails[]>(`${this.apiUrl}/prescription-details`);
  }
  

  getPrescriptionDetails(prescriptionId: number): Observable<PrescriptionDetails[]> {
    return this.http.get<PrescriptionDetails[]>(`${this.apiUrl}/prescription-details?prescriptions_id=${prescriptionId}`);
  }
}

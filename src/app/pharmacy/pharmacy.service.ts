import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor() { }

  
  getPatients(): Observable<any[]> {
    const patients = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 40 },
    { id: 4, name: 'Bob Brown', age: 50 },
    { id: 5, name: 'Charlie White', age: 60 }
    ];
    return of(patients);
  }

  getPrescriptionsByPatient(patientId: number): Observable<any[]> {
    const prescriptions = [
      { id: 1, patientId: 1, doctor: 'Dr. White', drugs: ['Drug A', 'Drug B'] },
      { id: 2, patientId: 1, doctor: 'Dr. Black', drugs: ['Drug C'] }
    ];
    const filteredPrescriptions = prescriptions.filter(prescription => prescription.patientId === patientId);
    return of(filteredPrescriptions);
  }

  getPrescriptionDetails(prescriptionId: number): Observable<any> {
    const details = {
      id: prescriptionId,
      advice: 'Take with food twice a day'
    };
    return of(details);
  }
}

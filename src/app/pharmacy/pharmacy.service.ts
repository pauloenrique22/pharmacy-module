import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor() { }

  
  getPatients(): Observable<any[]> {
    const patients = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    return of(patients);
  }

  getPrescriptionsByPatient(patientId: number): Observable<any[]> {
    const prescriptions = [
      { id: 1, doctor: 'Dr. White', drugs: ['Drug A', 'Drug B'] },
      { id: 2, doctor: 'Dr. Black', drugs: ['Drug C'] }
    ];
    return of(prescriptions);
  }

  getPrescriptionDetails(prescriptionId: number): Observable<any> {
    const details = {
      id: prescriptionId,
      advice: 'Take with food twice a day'
    };
    return of(details);
  }
}

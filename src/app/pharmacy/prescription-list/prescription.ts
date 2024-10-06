export interface Prescription {
    id: number;
    patient_id: number;
    doctor_id: number;
    date_prescriptions: Date;
    doctor?: Doctor;
}

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
}
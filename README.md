# PharmacyModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## JSON Server

This project uses [JSON Server](https://github.com/typicode/json-server) to provide a full fake REST API. 

### Install Json Server
```bash
npm install json-server
```

### To start the JSON Server, run:
```bash
npx json-server db.json
```
By default, the JSON Server will run on http://localhost:3000/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Design

## Sequence Diagram 
![SequenceDiagram](https://github.com/user-attachments/assets/d17c61ec-bf60-4569-9ef3-da76b31878b3)"

# Application

## Json Database Overview
This JSON database models the interactions between patients, doctors, and their prescriptions in a healthcare system. Below is a detailed description of each part of the structure:

### 1. Patients

The `patients` section stores a list of individuals receiving medical care. Each patient has the following attributes:
- `id` (integer): Unique identifier for the patient.
- `name` (string): Full name of the patient.
- `age` (integer): Age of the patient.

**Example**:
```json
{
  "id": 1,
  "name": "John Doe",
  "age": 30
}
```

### 2. Doctors

The `doctors` section stores information about medical professionals. Each doctor has the following attributes:
- `id` (integer): Unique identifier for the doctor.
- `name` (string): Full name of the doctor.
- `specialty` (string): The doctor's field of expertise (e.g., General Physician, Dermatologist).

**Example**:
```json
{
  "id": 1,
  "name": "Dr. John Doe",
  "specialty": "General Physician"
}
```

### 3. Prescriptions

The `prescriptions` section links patients and doctors, representing each prescription event. Each prescription contains:
- `id` (integer): Unique identifier for the prescription.
- `patient_id` (integer): Identifier of the patient receiving the prescription.
- `doctor_id` (integer): Identifier of the doctor issuing the prescription.
- `date_prescriptions` (string): Date when the prescription was issued (formatted as `YYYY-MM-DD`).

**Example**:
```json
{
  "id": 1,
  "patient_id": 1,
  "doctor_id": 1,
  "date_prescriptions": "2021-01-01"
}
```

### 4. Prescription Details

The `prescription-details` section stores the specific medications prescribed within each prescription. Each entry includes:
- `id` (integer): Unique identifier for the prescription detail.
- `prescriptions_id` (integer): Identifier linking to the corresponding prescription.
- `medication` (string): Name of the prescribed medication.
- `dosage` (string): Dosage of the medication (e.g., 500mg).
- `frequency` (string): Frequency of medication administration (e.g., "3 times a day").

**Example**:
```json
{
  "id": 1,
  "prescriptions_id": 1,
  "medication": "Paracetamol",
  "dosage": "500mg",
  "frequency": "3 times a day"
}
```

### Relationships

- **Patient-Doctor Relationship**: A patient can have multiple prescriptions from various doctors.
- **Prescription-Details**: Each prescription can contain multiple medications with dosage and frequency details.

### Usage

This JSON structure is ideal for healthcare management systems where patients' medical records need to be tracked, prescriptions logged, and medication details monitored over time. It can be used as a basis for creating APIs to interact with medical data or for building healthcare management applications.

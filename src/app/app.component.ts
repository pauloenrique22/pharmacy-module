import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientSelectComponent } from "./pharmacy/patient-select/patient-select.component";
import { PrescriptionListComponent } from './pharmacy/prescription-list/prescription-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientSelectComponent, PrescriptionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pharmacy-module';
}

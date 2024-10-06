import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PatientSelectComponent } from './patient-select/patient-select.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';


@NgModule({
  declarations: [
    PatientSelectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PharmacyRoutingModule,
    AppComponent
  ],
  providers: []
  // bootstrap: [AppComponent]
})
export class PharmacyModule { }

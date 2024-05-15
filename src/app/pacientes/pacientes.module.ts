import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PacienteDetailComponent } from './pacientes-detail/pacientes-detail.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,ReactiveFormsModule, FormsModule
    

  ],
  exports: [PacientesComponent, PacienteDetailComponent ],
  declarations: [PacientesComponent, PacienteDetailComponent]
  
})
export class PacientesModule { }

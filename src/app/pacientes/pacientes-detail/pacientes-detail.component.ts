import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pacientes-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {
  @Input() searchedPaciente:  Pacientes | null = null;

  constructor() { }

  ngOnInit() {
  }

}



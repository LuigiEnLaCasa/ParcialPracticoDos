import { Component, OnInit } from '@angular/core';
import { PacientesService } from './pacientes.service';
import { Pacientes } from './pacientes';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  
  pacientes: Array<Pacientes>=[];
  numeroMenores: number = 0;

  
  selected: boolean = false;
  searchedPaciente: any;

  

  constructor(private pacientesService : PacientesService ) { }

  getPacientesList():void {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }



  getNumMenores(){
    let totalMenores = 0; 
    for (let p of this.pacientes) {
      console.log(p.edad);
      if ((p.edad) < 18) {
        totalMenores += 1;
        console.log(totalMenores);
      } 
    }
    this.numeroMenores = totalMenores;
  }

  ngOnInit() {
    this.getPacientesList();
    this.getNumMenores();
  }



  onSelected(paciente: Pacientes ): void {
    this.selected = true;
    this.searchedPaciente = paciente;
  }

}

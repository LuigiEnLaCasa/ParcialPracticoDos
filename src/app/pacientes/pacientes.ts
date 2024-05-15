export class Pacientes {
    nombre: string;
    edad: number;
    diagnostico: string;
    
    historial: Array<string> = [];



    searchedPaciente: any;


    numMenores: number = 0;
    


constructor(nombre: string, edad: number, diagnostico: string , historial: Array<string>)
{
    this.nombre = nombre;
    this.edad = edad;
    this.diagnostico = diagnostico;

    
    this.historial = historial;

}


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Pacientes } from './pacientes';


@Injectable({
  providedIn: 'root'
})

export class PacientesService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getPacientes(): Observable<Pacientes[]> {
  return this.http.get<Pacientes[]>(this.apiUrl);
}





}

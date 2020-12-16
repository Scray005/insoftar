import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Persona } from '../models/app.usuario.models';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  consultarPersona(){
    return this.getURL("persona");
  }
  
  insertarPersona(persona: Persona){
    return this.http.post("//localhost:9091/insertar", persona);
  }

  actualizarPersona(persona: Persona){
    return this.http.put("//localhost:9091/actualizar", persona);
  }

  getURL(path: string){
    return this.http.get(`//localhost:9091/${ path }`);
  }
}

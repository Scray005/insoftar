import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/app.usuario.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-tabla-consultar',
  templateUrl: './tabla-consultar.component.html',
  styles: []
})
export class TablaConsultarComponent implements OnInit {
  persona: Persona[];
  constructor(private personaService: PersonaService) { 
      this.persona = [];
      this.consultarPersona();
  }
  
  consultarPersona(){
    this.personaService.consultarPersona().subscribe((params:Persona[]) => {
        this.persona = params;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/app.usuario.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-actualizar',
  templateUrl: './formulario-actualizar.component.html',
  styles: []
})
export class FormularioActualizarComponent implements OnInit {
  private persona: Persona;
  form: FormGroup ;
  
  constructor(private personaService: PersonaService, 
             private activatedRoute: ActivatedRoute,
             private formBuilder: FormBuilder) { 
    this.persona = new Persona();
    this.buildForm();
    //this.insertarPersona(this.persona);
  }
  
  private buildForm(){
    this.form = this.formBuilder.group({
      id: '',
      nombre: '',
      apellido: [''],
      cedula: ['', [Validators.required]],
      correo: ['', [Validators.email]],
      telefono: ['']
    })
  }

  actualizarPersona(event: Event){
    event.preventDefault();
    this.personaService.actualizarPersona(this.form.value).subscribe((pers)=>{
      console.log(pers);
    });
  }


  ngOnInit() {
  }
}

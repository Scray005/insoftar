import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/app.usuario.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  private persona: Persona;
  form: FormGroup;
  private correos: string;
  flagExists:Boolean;

  constructor(private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.persona = new Persona();
    this.buildForm();
    this.flagExists = false;
    //this.insertarPersona(this.persona);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: '',
      apellido: [''],
      cedula: ['', [Validators.required]],
      correo: ['', [Validators.email]],
      telefono: ['']
    })
  }

  insertarPersona(event: Event) {
    event.preventDefault();
    this.consultarPersona();
    console.log(this.flagExists);
    if(this.flagExists){
      this.personaService.insertarPersona(this.form.value).subscribe((pers) => {
        console.log("Entro aca2");
        console.log(pers);
      });
    }
  }

  consultarPersona() {
    console.log("entro");
    this.personaService.consultarPersona().subscribe((params: string[]) => {
      params.map((data => {
        if (data['correo'] == this.form.value.correo) {
          console.log("Entro aca");
          this.flagExists = true;
        }
      }));
      // this.correos = params['correo'];
      // console.log(this.correos);
    });
  }

  ngOnInit() {
  }

}

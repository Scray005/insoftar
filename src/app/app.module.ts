import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { appRouting } from './app.router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormularioActualizarComponent } from './components/formulario-actualizar/formulario-actualizar.component';
import { TablaConsultarComponent } from './components/tabla-consultar/tabla-consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    FormularioActualizarComponent,
    TablaConsultarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

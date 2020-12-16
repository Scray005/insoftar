import { FormularioComponent } from './components/formulario/formulario.component';

import { RouterModule, Routes } from '@angular/router';
import { FormularioActualizarComponent } from './components/formulario-actualizar/formulario-actualizar.component';
import { HomeComponent } from './components/home/home.component';
import { TablaConsultarComponent } from './components/tabla-consultar/tabla-consultar.component';

const routes: Routes = [
    { path: 'home', component: TablaConsultarComponent },
    { path: 'insertar', component: FormularioComponent },
    { path: 'actualizar', component: FormularioActualizarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash:true});
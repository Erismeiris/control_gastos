import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerGastosComponent } from './components/ver-gastos/ver-gastos.component';
import { CenterComponent } from './shared/center/center.component';
import { PoliticasDePrivacidadComponent } from './shared/politicas-de-privacidad/politicas-de-privacidad.component';

const routes: Routes = [
  {path:"center", component:CenterComponent},
  {path:'', component:CenterComponent},
  {path:'politicas', component: PoliticasDePrivacidadComponent},
  {path:'seguimiento-gastos', component: VerGastosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

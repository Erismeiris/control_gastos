import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerGastosComponent } from './components/ver-gastos/ver-gastos.component';
import { CenterComponent } from './shared/center/center.component';
import { PoliticasDePrivacidadComponent } from './shared/politicas-de-privacidad/politicas-de-privacidad.component';
import { GastoPorMesesComponent } from './components/gasto-por-meses/gasto-por-meses.component';
import { GastosPorCategoriaComponent } from './components/gastos-por-categoria/gastos-por-categoria.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:"center", component:CenterComponent},
  {path:'', component:CenterComponent},
  {path:'politicas', component: PoliticasDePrivacidadComponent},
  {path:'seguimiento-gastos', component: VerGastosComponent,
   ...canActivate (()=>redirectUnauthorizedTo(['login']))},
  {path:'profile', component: ProfileComponent, ...canActivate (()=>redirectUnauthorizedTo(['login']))},
  {path:'gastos-por-meses', component: GastoPorMesesComponent},
  {path:'gastos-por-categoria', component: GastosPorCategoriaComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

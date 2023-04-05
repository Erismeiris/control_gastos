import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {provideAuth, getAuth} from '@angular/fire/auth'




import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CenterComponent } from './shared/center/center.component';
import { PoliticasDePrivacidadComponent } from './shared/politicas-de-privacidad/politicas-de-privacidad.component';
import { InsertarGastosComponent } from './components/insertar-gastos/insertar-gastos.component';
import { VerGastosComponent } from './components/ver-gastos/ver-gastos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPorCategoriasComponent } from './components/tabla-por-categorias/tabla-por-categorias.component';
import { environment } from 'src/environments/environment';
import { TablaPorProductoComponent } from './components/tabla-por-producto/tabla-por-producto.component';
import { NewCategoriaComponent } from './components/newCategoria/newCategoria.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoPorMesesComponent } from './components/gasto-por-meses/gasto-por-meses.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GastosPorCategoriaComponent } from './components/gastos-por-categoria/gastos-por-categoria.component';
import { EditarGastosComponent } from './components/editarGastos/editarGastos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    PoliticasDePrivacidadComponent,
    InsertarGastosComponent,
    VerGastosComponent,
    TablaPorCategoriasComponent,
    TablaPorProductoComponent,
    NewCategoriaComponent,
    GastoPorMesesComponent,
    GastosPorCategoriaComponent,
    EditarGastosComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxChartsModule,
    BrowserAnimationsModule,


    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth( ()=> getAuth())
    
        
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

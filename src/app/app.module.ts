import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';




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
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';


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
    NewCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    
        
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

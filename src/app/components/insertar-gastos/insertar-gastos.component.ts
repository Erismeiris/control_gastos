import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GastosService } from 'src/app/services/gastos.service';
import {MatDialog} from '@angular/material/dialog';
import { async } from '@angular/core/testing';
import { Categoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NewCategoriaComponent } from '../newCategoria/newCategoria.component';

@Component({
  selector: 'app-insertar-gastos',
  templateUrl: './insertar-gastos.component.html',
  styleUrls: ['./insertar-gastos.component.css']
})
export class InsertarGastosComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  

  // public categorias: string[]=['Ropa','Refrescos', 'Educación', 'Comida', 'Combustible', 'Entretenimiento', 'Salud', 'Transporte', 'Mascotas', 'Otra']
 public categorias: Categoria[]=[];

  constructor( private fb: FormBuilder,
              private gastosServices : GastosService,
              private categoriaServices: CategoriaService,
              public dialog: MatDialog){
    this.form = this.fb.group({
      categoria: [null, [Validators.required, Validators.minLength(10)]],
      producto: [null, [Validators.required, ]],
      monto: [null, [Validators.required]],
      descripcion: [null],
      tasa_de_cambio: [null],
      date: [Date]
    });

  }

  ngOnInit(): void {
    this.getCategorias();
  }

saveDetails(form: any) {
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
 
}

async addgastos(){
 const resp = await this.gastosServices.addGastos(this.form.value)
 alert('El gasto ha sido creado');
 this.form.reset()
}

getCategorias(){
  this.categoriaServices.getCategoria().subscribe( resp => {
    this.categorias = resp
    
  }) 
}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(NewCategoriaComponent, {
    width:"100vh",
    enterAnimationDuration,
    exitAnimationDuration,
   });}

}

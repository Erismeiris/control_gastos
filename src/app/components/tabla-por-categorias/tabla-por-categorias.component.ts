import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Categoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { GastosService } from 'src/app/services/gastos.service';






@Component({
  selector: 'app-tabla-por-categorias',
  templateUrl: './tabla-por-categorias.component.html',
  styleUrls: ['./tabla-por-categorias.component.css']
})
export class TablaPorCategoriasComponent implements OnInit {

  public categorias: Categoria[] = []

  constructor( private categoriaServices: CategoriaService){

  }
  ngOnInit(): void {
    
  }

getCategorias(){
  this.categoriaServices.getCategoria().subscribe( resp => {
    this.categorias = resp
  })
}
 
  
  


 


 
}

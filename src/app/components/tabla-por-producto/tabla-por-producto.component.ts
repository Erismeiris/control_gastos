import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-tabla-por-producto',
  templateUrl: './tabla-por-producto.component.html',
  styleUrls: ['./tabla-por-producto.component.css']
})
export class TablaPorProductoComponent implements OnInit {

  public gastos:Gastos[]=[]

  constructor( private gastosServices: GastosService){

  }


  ngOnInit(): void {
    this.getGastos();
  }


  getGastos(){
    this.gastosServices.getGastos().subscribe( resp =>{
      this.gastos = resp
    })
  }


}

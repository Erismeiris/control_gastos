import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { GastosService } from 'src/app/services/gastos.service';

export interface GastoMensual {
  mes: string;
  monto: number;
}

@Component({
  selector: 'app-ver-gastos',
  templateUrl: './ver-gastos.component.html',
  styleUrls: ['./ver-gastos.component.css']
})
export class VerGastosComponent implements OnInit {

  
 totalAnualLocal:number[]=[]

  public anualTotalLocal:number= 0;
  public mensualLocal:number= 0;
  public promedioMensualLocal:number = 0;
  public anualTotalUsd:number=0
  public mensualUsd:number=0
  public promedioMensualUsd:number=0
  public calculoDeTendencia:number= -12;
  public tendencia:string=''

  

  constructor( private gastoServices: GastosService ){
   

  }

  ngOnInit(): void {
    
this.condicionDeTendencia();
this.getGastos();

  }

 condicionDeTendencia(){
  if (this.calculoDeTendencia == 0) {
    this.tendencia = 'Estable'
  } else if (this.calculoDeTendencia < 0) {
    this.tendencia ='No estás ahorrando lo suficiente'
  } else {
   this.tendencia = 'Felicidades, estás ahorrando'
  }
 
}

 // Get the current month
 getMonth(){
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
 return `${year}-${month}`

}

//get the last day of the month
getLastDayOfMonth(){
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return new Date(year, month, 0).getDate()
}

getGastos(){
  this.gastoServices.getGastos().subscribe( resp => {
    this.anualTotalLocal = resp.map(item => item.monto).reduce((a, b) => a + b, 0);
    this.anualTotalUsd = resp.map(item => (item.monto/item.tasa_de_cambio)).reduce( (a,b)=> a+b , 0) 
    this.mensualLocal = resp.filter(item => new Date(item.date).getMonth() == new Date().getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0);
    this.mensualUsd = resp.filter(item => new Date(item.date).getMonth() == new Date().getMonth()).map(item => item.monto / item.tasa_de_cambio).reduce((a, b) => a + b, 0);
    //count the number of months
    let months = resp.map(item =>new Date(item.date).getMonth())
    let uniqueMonths = [...new Set(months)]
    let numberOfMonths = uniqueMonths.length
    this.promedioMensualLocal = this.anualTotalLocal/numberOfMonths
    this.promedioMensualUsd   = this.anualTotalUsd/numberOfMonths
 
  })
}



}

import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/services/gastos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';

// ***** Prueba de una tabla mejor


@Component({
  selector: 'app-tabla-por-producto',
  templateUrl: './tabla-por-producto.component.html',
  styleUrls: ['./tabla-por-producto.component.css']
})
export class TablaPorProductoComponent implements OnInit {

  public gastos: Gastos[] = []
  
 
 
  public datePicker!:FormGroup;
  

  constructor(private gastosServices: GastosService,
    private fb: FormBuilder
  ) {

    this.datePicker = this.fb.group(
      {
        startDate: ['', Validators.required],
        endDate:['', Validators.required]

      }
    )
    

  }


  ngOnInit(): void {
    
   
  }


   getGastos() {
    
    this.gastosServices.getGastos().subscribe( resp => {
    this.gastos = resp.filter( item => new Date(item.date).getTime() >= this.datePicker.controls['startDate'].value && new Date(item.date).getTime() <= this.datePicker.controls['endDate'].value)
      
    })
    
   
   }

   async deleteGasto(gasto:Gastos){
    const resp = await this.gastosServices.deleteGastos(gasto)
    
    
   }
}




import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/services/gastos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { EditarGastosComponent } from '../editarGastos/editarGastos.component';


// ***** Prueba de una tabla mejor


@Component({
  selector: 'app-tabla-por-producto',
  templateUrl: './tabla-por-producto.component.html',
  styleUrls: ['./tabla-por-producto.component.css']
})
export class TablaPorProductoComponent implements OnInit {

  public gastos: Gastos[] = []



  public datePicker!: FormGroup;
  public updateForm!: FormGroup;


  constructor(private gastosServices: GastosService,
    private fb: FormBuilder, public dialog: MatDialog
  ) {

    this.datePicker = this.fb.group(
      {
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      })

  }


  ngOnInit(): void {
    this.getGastos()

  }

  // Get the current month
  getMonth() {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${year}-${month}`

  }

  //get the last day of the month
  getLastDayOfMonth() {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return new Date(year, month, 0).getDate()
  }

  getGastos() {

    this.gastosServices.getGastos().subscribe(resp => {
      if (this.datePicker.controls['startDate'].value === '' || this.datePicker.controls['endDate'].value === '') {

        //Show only the current month automatically 
        this.gastos = resp.filter(item => new Date(item.date).getTime() >= new Date(this.getMonth() + '-01').getTime() && new Date(item.date).getTime() <= new Date(this.getMonth() + '-' + this.getLastDayOfMonth()).getTime()).sort((a, b) => (a.date > b.date) ? 1 : -1)

      } else {

        this.gastos = resp.filter(item => new Date(item.date).getTime() >= this.datePicker.controls['startDate'].value && new Date(item.date).getTime() <= this.datePicker.controls['endDate'].value).sort((a, b) => (a.date > b.date) ? 1 : -1)
      }

    })


  }

  async deleteGasto(gasto: Gastos) {
    let decision = confirm('¿Estas seguro de actualizar este gasto?')
    if (decision) {
      const resp = await this.gastosServices.deleteGastos(gasto)
    }


  }



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, gasto: Gastos): void {
    this.dialog.open(EditarGastosComponent, {
      width: "120vh",
      enterAnimationDuration,
      exitAnimationDuration,
      data: gasto
    });

  }

}




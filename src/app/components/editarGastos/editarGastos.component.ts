import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/interface/categoria';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/services/gastos.service';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-editarGastos',
  templateUrl: './editarGastos.component.html',
  styleUrls: ['./editarGastos.component.css']
})
export class EditarGastosComponent implements OnInit {

  public categorias:Categoria[]=[];
  public gasto!:Gastos

  public updateForm!: FormGroup;
  constructor(private fb:FormBuilder, 
    private gastosServices:GastosService,
    private categoriaServices:CategoriaService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any ) {

     
      
   }
   saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
   
  }


  ngOnInit() {
    this.getCategorias()
    this.updateForm = this.fb.group(
      { categoria: [this.data.categoria , Validators.required],
        producto: [this.data.producto , Validators.required],
        monto: [this.data.monto, Validators.required],
        descripcion:this.data.descripcion,
        tasa_de_cambio: this.data.tasa_de_cambio,
        date: this.data.date,
      })
  }
  getCategorias(){
    this.categoriaServices.getCategoria().subscribe( resp => {
      this.categorias = resp.sort((a, b) => (a.name > b.name) ? 1 : -1)
      
    }) 
  }
//update gastos
  updateGastos(){
    //update gastos
    this.gastosServices.updateData(this.data.id,this.updateForm.value).then( resp => {
      if (resp == undefined) {
        alert('Gasto actualizado correctamente '+ this.data.producto)
      this.dialog.closeAll()
        
      }
      else{
        alert('No se pudo actualizar el gasto')
      }     
    }
    )
    
  }

  


}

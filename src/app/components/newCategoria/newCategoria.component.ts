import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-newCategoria',
  templateUrl: './newCategoria.component.html',
  styleUrls: ['./newCategoria.component.css']
})
export class NewCategoriaComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor( private categoriaServices: CategoriaService,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        
      });
    }

  ngOnInit() {
  }


  
    async addCategoria(){
      const resp = await this.categoriaServices.addCategoria(this.form.value)
      this.form.reset()
     }
  

}

import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interface/categoria';
import { Data } from 'src/app/interface/Data';
import { Gastos } from 'src/app/interface/gastos';
import { CategoriaService } from 'src/app/services/categoria.service';
import { GastosService } from 'src/app/services/gastos.service';

export interface MontoPorCategoria {
  name: string;
  value: number;
}

@Component({
  selector: 'app-gastos-por-categoria',
  templateUrl: './gastos-por-categoria.component.html',
  styleUrls: ['./gastos-por-categoria.component.css']
})
export class GastosPorCategoriaComponent implements OnInit {

  public single: any[] = [];

  public gastos: any[] = []
  public montoPorCategoria: MontoPorCategoria[] = []
  view: [number, number] = [800, 500];

  constructor(private categoriaServices: CategoriaService,
    private gastosServices: GastosService) {

  }

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Categorias';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Monto(ZAR)';
  legendTitle: string = 'Meses';

  colorScheme = ['#5AA454', '#C7B42C', '#AAAAAA']
  



  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
    this.getGastos();
    this.filtroPorCategoria();
    /*  this.calcularMontoPorCategoria() */

  }


  getGastos() {
    this.gastosServices.getGastos().subscribe(resp => {
      this.gastos = resp

    })

  }

  filtroPorCategoria() {
    this.gastosServices.getGastos().subscribe(resp => {

      this.gastos = resp
      let categoria = this.gastos.map((gasto: Gastos) => gasto.categoria)
      let categoriaUnica = categoria.filter((value, index, self) => self.indexOf(value) === index)
      let montoPorCategoria = categoriaUnica.map((categoria) => {
        let monto = this.gastos.filter((gasto: Gastos) => gasto.categoria == categoria).map((gasto: Gastos) => gasto.monto).reduce((a, b) => a + b)
        return { name: categoria, value: monto.toFixed(2) }
      })

      this.single = montoPorCategoria

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { GastosService } from 'src/app/services/gastos.service';




@Component({
  selector: 'app-gasto-por-meses',
  templateUrl: './gasto-por-meses.component.html',
  styleUrls: ['./gasto-por-meses.component.css']
})
export class GastoPorMesesComponent implements OnInit {

  view: [number, number] = [700, 500];
  public multi: Data = []



  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  yAxisLabel: string = 'Monto';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private gastosServices: GastosService) {
    this.getGastos()
  }
  ngOnInit(): void {

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getGastos() {

    setTimeout(() => {
      let year = new Date().getFullYear()
      this.gastosServices.getGastos().subscribe(
        res => {
          let enero = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-01-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let febrero = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-02-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let marzo = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-03-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let abril = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-04-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let mayo = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-05-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let junio = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-06-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let julio = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-07-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let agosto = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-08-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let septiembre = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-09-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let octubre = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-10-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let noviembre = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-11-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);
          let diciembre = res.filter(item => new Date(item.date).getMonth() === new Date(year + "-12-01").getMonth()).map(item => item.monto).reduce((a, b) => a + b, 0).toFixed(2);

          this.multi = [
            {
              "name": "Gastos",
              "series": [
                {
                  "name": "Enero",
                  "value": enero.toString()
                },
                {
                  "name": "Febrero",
                  "value": febrero.toString()
                },
                {
                  'name': 'Marzo',
                  "value": marzo.toString()
                },
                {
                  "name": "Abril",
                  "value": abril.toString()
                },
                {
                  "name": "Mayo",
                  "value": mayo.toString()
                },
                {
                  "name": "Junio",
                  "value": junio.toString()
                },
                {
                  "name": "Julio",
                  "value": julio.toString()
                },
                {
                  "name": "Agosto",
                  "value": agosto.toString()
                },
                {
                  "name": "Septiembre",
                  "value": septiembre.toString()
                },
                {
                  "name": "Octubre",
                  "value": octubre.toString()
                },
                {
                  "name": "Noviembre",
                  'value': noviembre.toString()
                },
                {
                  "name": "Diciembre",
                  'value': diciembre.toString()
                }
              ]
            },
            {
              "name": "Ingresos",
              "series": [
                {
                  "name": "Febrero",
                  "value": 17990.29
                },
                {
                  "name": "Marzo",
                  "value": 17990.29
                },
              ]
            }
          ];

        });

    }, 1500);


  }
}







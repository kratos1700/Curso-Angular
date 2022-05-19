import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
   /* this.graficasService.getUsuariosRedesSociales().subscribe( data =>{
      console.log(data);
      //extramemos la info , en este caso la clave
      const labels = Object.keys(data)
      const valores = Object.values(data)
      this.doughnutChartData ={
        labels,
        datasets:[{data: valores}],
      } 
    })*/

    this.graficasService.getUsuariosRedesSocialesGrafica()
    .subscribe(({labels, valores}) =>{
      this.doughnutChartData ={
        labels,
        datasets:[{data: valores,  backgroundColor:['#FC08B8', '#BB07D9', '#8B06F0','#4007D9','#0F14FC']
      }],
      } 
    })
  }

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutData:number[]=[];
  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.doughnutData, backgroundColor:['#FC08B8', '#BB07D9', '#8B06F0','#4007D9','#0F14FC']
    },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };

  
 


   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}

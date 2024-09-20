import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

 // para pasar parametros en barras dobles
 @Input() line:boolean=false;

  constructor() { }

  ngOnInit(): void {
    // cambiamos el tipo de grafica
    if(this.line){
      this.barChartType= 'line'
    }
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
     
    }
  };

  // public barChartType: ChartType = 'bar';
  // line, bar,pie,line,scatter,bubble,doughnut,polarArea
  public barChartType: ChartType = 'bar';
 
 @Input() barChartData= {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor:'#6DFCAA', hoverBackgroundColor:'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor:'#C2D95D',hoverBackgroundColor:'red'},
      { data: [ 12, 22, 45, 98, 23, 87, 69 ], label: 'Series C', backgroundColor:'#F0C673' ,hoverBackgroundColor:'red'}
    ]
  };

 

  






}

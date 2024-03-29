import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  // para pasar parametros en barras dobles
// @Input() line:boolean=false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {

    // cambiamos el tipo de grafica
    // if(this.line){
    //   this.barChartType = 'radar';
    // }
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
 
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor:'#6DFCAA', hoverBackgroundColor:'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor:'#C2D95D',hoverBackgroundColor:'red'},
      { data: [ 12, 22, 45, 98, 23, 87, 69 ], label: 'Series C', backgroundColor:'#F0C673' ,hoverBackgroundColor:'red'}
    ]
  };

 

  // funcion para cambiar los datos de la grafica
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

      this.barChartData.datasets[1].data = [
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
      ];
  
      this.barChartData.datasets[2].data = [
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
      ];

    this.chart?.update();
  }





}

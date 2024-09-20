import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }


  /**
   * NO FUNCIONA POR VERSION DIFERENTE DEL CURSO, NO SE PUEDEN PASAR LOS DATOS
   * CON EL @INPUT()
   */


 /*  proveedoresData:ChartDataset[]=[
  {data: [100,200,300,400,500], label:'Vendedor A'},
  {data: [50,250,30,450,200], label:'Vendedor B'}
];

proveedoresLabels:string[] = ['2021', '2022','2023','2024','2025'];

productoData:ChartDataset[]=[
  {data: [200,300,400,300,100], label:'Carros', backgroundColor:'blue'}
]
 */

public barChartType: ChartType = 'line'; 



   proveedoresData = {
    labels: [ '2021', '2022','2023','2024','2025'],
    datasets: [
      {data: [100,200,300,400,500], label:'Vendedor A'},
        {data: [50,250,30,450,200], label:'Vendedor B'}
    ]
  }

    productoData: ChartData<'radar'> = {
    labels: [ '2021', '2022','2023','2024','2025'],
    datasets: [
      {data: [200,300,400,300,100], label:'Carros', backgroundColor:'blue'},
    ]
  

   
   
  }
}

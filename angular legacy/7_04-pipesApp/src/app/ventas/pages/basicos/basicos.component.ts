import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

 nombreLower: string = "pariatur nostrud et sit laboris commodo cillum sit est et nisi."

 fecha:Date = new Date(); // dia de hoy
 

}

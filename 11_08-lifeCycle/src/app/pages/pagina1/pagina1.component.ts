import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges,
 DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {

  nombre:string= 'Kratos1700';
  segundos:number=0;
  timerSubcription!:Subscription;

  //primero siempre se ejecuta el construntor si esta 
  constructor() { 
    console.log('constructor');
    
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    //finalizamos la suscripcion al observable para evitar que el observable sea infinito
    this.timerSubcription.unsubscribe();
    
  }
  ngAfterViewChecked(): void {
   console.log('AfterViewChecked');
   
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
    
  }
  ngAfterContentInit(): void {
   console.log('AfterContentInit');
   
  }
  ngDoCheck(): void {
    console.log('DoCheck');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    
  }
// se ejecuta el segundo
  ngOnInit(): void {
    console.log('ngOnInit');

    // interval crea un observable de intervalos de tiempo, en milisegundos
  this.timerSubcription= interval(1000).subscribe(i => {
     this.segundos=i;
      
    })
 
    
  }

  guardar(){

  }

}

/**
 * INFORMACION OFICIAL CICLOS DE VIDA DE ANGULAR
 * 
 * https://angular.io/guide/lifecycle-hooks
 */
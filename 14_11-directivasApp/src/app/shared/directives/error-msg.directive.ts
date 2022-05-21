import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective  implements OnInit, OnChanges{


  private _color:string='red';
  private _mensaje:string='Este campo es requerido'

  htmlElement:ElementRef<HTMLElement>;
  // podemos recibir el color por parametro con el Input desde el html
 @Input() set color(valor:string){
  //  this.htmlElement.nativeElement.style.color= valor;
   this._color= valor;
   this.setColor()
 }
//  @Input()mensaje:string='Debe ingresar este campo';
@Input() set mensaje(valor:string){
  // this.htmlElement.nativeElement.innerText= valor;
  this._mensaje= valor;
  this.setMensaje()

}

@Input() set valido(valor:boolean){
  if (valor){
    this.htmlElement.nativeElement.classList.add('hidden');
  }else{
    this.htmlElement.nativeElement.classList.remove('hidden');

  }
}

  constructor( private element:ElementRef<HTMLElement>) {
    console.log('contructor directive');
    console.log(element);

    this.htmlElement= element;
    
   
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    
  }


  ngOnInit(): void {
  //  console.log('onInit directiva');
  this.setEstilo()
   this.setColor()
   this.setMensaje()
   
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text'); // añade una clase en este caso de bootstrap
  
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;
  }
  setMensaje():void{
    // this.htmlElement.nativeElement.textContent= this.mensaje;
    this.htmlElement.nativeElement.innerText= this._mensaje;
  }
}

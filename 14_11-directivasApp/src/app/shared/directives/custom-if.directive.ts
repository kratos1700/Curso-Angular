import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion:boolean){
    if(condicion){
      // creamos la vista con la referencia del template
      this.viewContainer.createEmbeddedView(this.templateRef)

    }else{
      // eliminamos las vista a mostrar
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef:TemplateRef<HTMLElement>,
    private viewContainer:ViewContainerRef) {


    
   }

}

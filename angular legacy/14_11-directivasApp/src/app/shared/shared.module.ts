import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective // tenemos que exportar la directiva
  ],
  exports:[
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

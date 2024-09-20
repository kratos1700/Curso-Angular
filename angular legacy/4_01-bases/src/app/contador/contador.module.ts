import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent // importamos el comnponente
    ],
    exports: [
        ContadorComponent // lo exportamos para poder usar
    ],
    imports: [
       
    ]
})





export class ContadorModule {

}
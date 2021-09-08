import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//modulo personalizat

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


// cambiar el idioma en localStorage
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from'@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    VentasModule,
    SharedModule,
    AppRouterModule

    
  ],
  providers: [ // aqui configuramos  el idioma que hemos establecido 
    { 
      provide: LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

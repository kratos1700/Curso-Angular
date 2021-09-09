import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';

//modulo personalizat

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


// cambiar el idioma en localStorage
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from'@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    VentasModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,

    
  ],
  providers: [ // aqui configuramos  el idioma que hemos establecido 
    { 
      provide: LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

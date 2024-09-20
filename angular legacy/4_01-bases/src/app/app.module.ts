import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,  // importamos el modulo personalizado creado por nosotros con sus 2 components para usar
    ContadorModule, // importamos el modulo personalizado creado por nosotros 
    DbzModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

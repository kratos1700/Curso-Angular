import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent // exportamos el sidebar component

  ],
  imports: [
    CommonModule,
    RouterModule  // importamos el router module para que funcione el sidebar
  ]
})
export class SharedModule { }

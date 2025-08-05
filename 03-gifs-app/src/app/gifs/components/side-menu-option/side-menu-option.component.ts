import {  Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../services/gifs.service';

interface MenuOption{

  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-option',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './side-menu-option.component.html',

})
export class SideMenuOptionComponent {


  gifsService = inject(GifsService); // Inyectamos el servicio GifsService para poder usarlo en este componente

menuOptions: MenuOption[] = [
  {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'Discover trending GIFs',
    route: '/dashboard/trending'
  },
   {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Search',
    subLabel: 'Search for GIFs',
    route: '/dashboard/search'
  }

]


 }

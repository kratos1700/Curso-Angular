import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private debounceTimer?:NodeJS.Timeout;

  constructor(private placesService:PlacesService) { }

  ngOnInit(): void {
  }

  onQueryChanged(query:string=''){
// si hay un valor lo limpiamos
    if(this.debounceTimer) clearTimeout(this.debounceTimer)
    // esperamos 1 sec para enviar los datos
    this.debounceTimer= setTimeout(()=>{
      this.placesService.getPlacesByQuery(query)

    }, 1000)


  }

}

import { Component, EventEmitter, Output } from "@angular/core";
import { DBZService } from "../services/dbz.service";
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: "./main-page.component.html"
})

export class MainPageComponent {

  //injectem el service al constructor
  constructor(private dbzService: DBZService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {

    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(charac: Character): void {
    this.dbzService.onNewCharacter(charac)
  }


}

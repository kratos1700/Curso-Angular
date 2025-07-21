import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root' // singleton a tota la app
})
export class DBZService {

  constructor() { }



  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 2000
    }

  ];




  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter(id:number):void{
    this.characters.splice(id,1);
  } */

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      character => character.id !== id);

  }


}

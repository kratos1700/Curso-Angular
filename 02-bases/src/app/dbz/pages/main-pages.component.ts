import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
  selector:'app-dbz-main-page',
  templateUrl:"./main-page.component.html"
})

export class MainPageComponent  {

  public characters : Character[] = [
    {
    name:'Goku',
    power: 10000
  },
  {
    name:'Vegeta',
    power:12000
  },
  {
    name:'Trunks',
    power:2000
  }

];




onNewCharacter(character:Character):void{

  this.characters.push(character);

}

/* The `onDeleteCharacter` method in the `MainPageComponent` class is responsible for deleting a
character from the `characters` array based on the provided `id`. It uses the `splice` method to
remove the character at the specified index in the array. */
onDeleteCharacter(id:number):void{
  this.characters.splice(id,1);

}

}

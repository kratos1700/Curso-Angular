import { Component } from "@angular/core";
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

onDeleteCharacter(id:number):void{
  this.characters.splice(id);
}

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {

  @Output()  // para emitir el caracter i recibirlo al main page
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character= {
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);

    if( this.character.name === '') return;

    // emitimos el nuevo caracter
    this.onNewCharacter.emit({...this.character});

    this.character= {
      name: '',
      power: 0
    };

  }



}


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {


  @Input()
  public characterList: Character[] = [

    { name: 'Krillin', power: 1000 }

  ]

  @Output()  // para emitir el caracter i recibirlo al main page
  onDeleteId: EventEmitter<number> = new EventEmitter();



  onDeleteCharacter(id: number): void {
    console.log(id);
   // this.onDeleteId.emit(id)

  }

}

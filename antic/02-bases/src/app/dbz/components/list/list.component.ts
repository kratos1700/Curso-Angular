
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

  @Output()
public onDelete :EventEmitter<string> = new EventEmitter()


  onDeleteCharacter(id: string): void {
    console.log(id);
    //this.characterList.splice(id);
   this.onDelete.emit(id);

  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe ) { } // esta linia es para importar la informacion del componente padre k sera de tipo heroe

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true);
  }



  cerrar(){
    this.dialogRef.close();
  }

}

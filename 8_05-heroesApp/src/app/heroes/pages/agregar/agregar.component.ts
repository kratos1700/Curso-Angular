import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
       {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // si no incluimos en la ruta 'editar no hacemos la petcion para recuperar el heroe a editar
    if (!this.router.url.includes('editar')) {
      return;
    }

    // si estamos a editar se realiza la peticion
    this.activatedRoute.params
      .pipe(
        // obtenemos el id desestructurandolo del params i lo usamos para buscar el heroe por id
        switchMap(({ id }) => this.heroesService.getHeroesById(id))
      )
      .subscribe((heroe) => (this.heroe = heroe)); // le asignamos el heroe recuperado a la variable heroe
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    // controlamos si tenemos un id o no para poder crear o actualizar

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe((heroe) =>
        //mostramos snackbar
        this.mostrarSnackbar('Registro actualizado')
      );
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        //mostramos snackbar
        this.mostrarSnackbar('Registro creado');
      });
    }
  }

  borrarHeroe() {
    // abrimos el dialog, con data le enviamos la información al componente hijo
   const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe,
    });

    // obtenemos el valor de componente hijo al pulsar borrar.
    // es un observable, que comprovamos k esta en true
    dialog.afterClosed().subscribe((result)=>{
      if(result){

        // borramos el heroe
        this.heroesService.deleteHeroe(this.heroe.id!)
        .subscribe((resp) => {
    
          this.router.navigate(['/heroes']);
        }) 
      }
    })

    
  }

  mostrarSnackbar(mensaje: string) {
    // mensaje , accion(es el boton), opciones
    this.snackBar.open(mensaje, 'ok!', {
      duration: 3000,
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula, PeliculaDetalle } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
@Input() id;
  Peliculas: PeliculaDetalle = {};
  constructor(private movieServ: MoviesService) { }

  ngOnInit() {
    this.movieServ.getPeliculaDetalle(this.id).subscribe(resp => {
    console.log(resp);
    this.Peliculas = resp;
    });

    this.movieServ.getActores(this.id).subscribe(resp => {
      console.log(resp);
      });
    }

}

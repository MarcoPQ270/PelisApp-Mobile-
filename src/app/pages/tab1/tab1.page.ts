import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: any[] = [];
  peliculasPopulares: any[] = [];

  constructor(public MovieSer: MoviesService) {}

  ngOnInit() {
    this.MovieSer.GetCartelera().subscribe(resp => {
    console.log('Respuesta', resp);
    this.peliculasRecientes = resp.results;
  });
    this.getpopulares();
  }

  cargarMas() {
    this.getpopulares();
  }

  getpopulares() {
    this.MovieSer.GetPopulares().subscribe(resp => {
      console.log('Res Populares', resp);
      const arrTemp =[...this.peliculasPopulares, ...resp.results];
      this.peliculasPopulares = arrTemp;
    });
  }
}

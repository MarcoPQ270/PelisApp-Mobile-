import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits } from '../Interfaces/interfaces';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularespages = 0;

  private apikey  = '3ce51f4f4d903e5ff3f19b8db4dd1de6';

  peliculas: any [] = [];

  constructor(private http: HttpClient) { }

  GetCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = [desde.getFullYear(), desde.getMonth() + 1 < 10 ? (desde.getMonth() + 1).toString().padStart(2, '0') : desde.getMonth() + 1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');
    const hastaStr = [hasta.getFullYear(), hasta.getMonth() + 1 < 10 ? (hasta.getMonth() + 1).toString().padStart(2, '0') : hasta.getMonth() + 1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2, '0') : hasta.getDate()].join('-');
    const url = `${URL}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get<RespuestaMDB>(url);
  }

  GetPopulares() {
    this.popularespages++;
    const urlpopulares = `${URL}/discover/movie?sort_by=popularity.desc&page=${this.popularespages}&api_key=${this.apikey}&language=es`;
    return this.http.get<RespuestaMDB>(urlpopulares);
  }

  getPeliculaDetalle(id: string) {
    const urlDetalles = `${URL}/movie/${id}?a=1&api_key=${this.apikey}&language=es`;
    return this.http.get<PeliculaDetalle>(urlDetalles);
  }

  getActores(id: string) {
  const urlActores = `${URL}/movie/${id}/credits?a=1&api_key=${this.apikey}&language=es`;
  return this.http.get<RespuestaCredits>(urlActores);
  }
}

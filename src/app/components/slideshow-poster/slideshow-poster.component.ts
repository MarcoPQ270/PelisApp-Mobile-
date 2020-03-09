import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() Peliculas: Pelicula [] = [];
  slidesOpts = {
    slidesPerView: 3.3,
    freeMOde: true
  };

  constructor(private modalCont: ModalController) { }

  ngOnInit() {}

  async VerDetalle(id: string) {
    const modal = await this.modalCont.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
    }
}

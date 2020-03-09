import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() Peliculas: Pelicula [] = [];

  slidesOpts = {
    slidesPerView: 1.1,
    freeMOde: true
  };

  constructor(private modalCont: ModalController) { }

  ngOnInit() {}

  async VerDetalle(id: string){
  const modal = await this.modalCont.create({
    component: DetalleComponent,
    componentProps: {
      id
    }
  });
  modal.present();
  }
}

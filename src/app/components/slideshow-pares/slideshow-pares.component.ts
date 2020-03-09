import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
@Input() Peliculas: Pelicula [] = [];
@Output() cargarMas = new EventEmitter();

slidesOpts = {
  slidesPerView: 3.3,
  freeMOde: true,
  spaceBetween: -10
};
  constructor(private modalCont: ModalController) { }

  ngOnInit() {}

  OnClick() {
    console.log('click button');
    this.cargarMas.emit();
  }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

//Arreglo imagenes
import { Foto } from "../../models/foto.model";
import { ARREGLO_CARRUSEL } from "../../mocks/foto.mock";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public miArr: Foto[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 60,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private router: Router) { 
    this.miArr = ARREGLO_CARRUSEL;
  }

  ngOnInit(): void {}

}

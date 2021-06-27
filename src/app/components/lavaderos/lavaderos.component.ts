import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import { Lavadero } from "../../models/lavaderos.model";
import { ARREGLO_LAVADEROS } from "../../mocks/lavadero.mocks";

@Component({
  selector: 'app-lavaderos',
  templateUrl: './lavaderos.component.html',
  styleUrls: ['./lavaderos.component.css']
})
export class LavaderosComponent implements OnInit {

  public miArr: Lavadero[]
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor() {
    this.miArr = ARREGLO_LAVADEROS;
    this.paginaActual = 1;
    this.cantidadMostrar = 12;
    this.cantidadTotalRegistros = this.miArr.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );

  }

  ngOnInit(): void {
  }

}

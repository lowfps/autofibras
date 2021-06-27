import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_SILLETERIA } from "../../mocks/foto.mock";

@Component({
  selector: 'app-silleteria',
  templateUrl: './silleteria.component.html',
  styleUrls: ['./silleteria.component.css']
})
export class SilleteriaComponent implements OnInit {

  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_SILLETERIA;
  }

  ngOnInit(): void {
  }

}

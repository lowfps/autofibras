import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_LAVADEROS } from "../../mocks/foto.mock";

@Component({
  selector: 'app-lavaderos',
  templateUrl: './lavaderos.component.html',
  styleUrls: ['./lavaderos.component.css']
})
export class LavaderosComponent implements OnInit {

  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_LAVADEROS;
  }

  ngOnInit(): void {
  }

}

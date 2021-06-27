import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_PARQUES_INFANTILES } from "../../mocks/foto.mock";

@Component({
  selector: 'app-parques-infantiles',
  templateUrl: './parques-infantiles.component.html',
  styleUrls: ['./parques-infantiles.component.css']
})
export class ParquesInfantilesComponent implements OnInit {
  
  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_PARQUES_INFANTILES;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_MESONES } from "../../mocks/foto.mock";

@Component({
  selector: 'app-mesones',
  templateUrl: './mesones.component.html',
  styleUrls: ['./mesones.component.css']
})
export class MesonesComponent implements OnInit {

  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_MESONES
  }


  ngOnInit(): void {
  }

}

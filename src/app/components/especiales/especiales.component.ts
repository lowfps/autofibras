import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_ESPECIALES } from "../../mocks/foto.mock";

@Component({
  selector: 'app-especiales',
  templateUrl: './especiales.component.html',
  styleUrls: ['./especiales.component.css']
})
export class EspecialesComponent implements OnInit {

  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_ESPECIALES;
  }

  ngOnInit(): void {
  }

}

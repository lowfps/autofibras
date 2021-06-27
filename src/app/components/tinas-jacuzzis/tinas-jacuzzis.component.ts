import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_TINAS } from "../../mocks/foto.mock";

@Component({
  selector: 'app-tinas-jacuzzis',
  templateUrl: './tinas-jacuzzis.component.html',
  styleUrls: ['./tinas-jacuzzis.component.css']
})
export class TinasJacuzzisComponent implements OnInit {

  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_TINAS;
  }

  ngOnInit(): void {
  }

}

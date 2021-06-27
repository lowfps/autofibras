import { Component, OnInit } from '@angular/core';

//Arreglo imagenes
import {Foto } from "../../models/foto.model";
import { ARREGLO_PARQUES_BIO } from "../../mocks/foto.mock";


@Component({
  selector: 'app-parques-bio',
  templateUrl: './parques-bio.component.html',
  styleUrls: ['./parques-bio.component.css']
})
export class ParquesBioComponent implements OnInit {
  
  public miArr: Foto[]

  constructor() { 
    this.miArr = ARREGLO_PARQUES_BIO;
  }

  ngOnInit(): void {
  }

}

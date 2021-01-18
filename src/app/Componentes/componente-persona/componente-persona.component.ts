import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelos/persona';

import {Heroes} from '../../Listas/Lista_personas'
@Component({
  selector: 'app-componente-persona',
  templateUrl: './componente-persona.component.html',
  styleUrls: ['./componente-persona.component.css']
})
export class ComponentePersonaComponent implements OnInit {

  show:boolean=true;

  
  lista : Persona = {
    id:1,
    nombre:"Victor",
    apellido: 'Lex',
    edad: 20,
    sexo: 'H'
  }
  

  listas = Heroes;

  id: Persona;
onSelect(lista: Persona): void {
  this.id = lista;
}

  constructor() { }

  ngOnInit(): void {
  }

  miEvento(): void {
    console.log("Se dio un click")
  }
}



import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonaService) {}

  ngOnInit(): void {}

  emitirSaludo() {
    this.personasService.saludar.emit(this.indice);
  }
}

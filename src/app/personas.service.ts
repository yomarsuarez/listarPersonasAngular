import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Yomar', 'Suarez'),
    new Persona('Pedro', 'Infante'),
    new Persona('Luis', 'Amador'),
  ];

  saludar = new EventEmitter<number>();
  constructor(private logginService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeConsola(
      `Agregamos persona ${persona.nombre}`
    );
    this.personas.push(persona);
  }
}

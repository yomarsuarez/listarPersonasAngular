import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';

  // personaAgregada(persona: Persona) {
  //   // this.logginService.enviaMensajeConsola(
  //   //   `Agregamos al arreglo la nueva persona: ${persona.nombre}`
  //   // );
  //   // this.personas.push(persona);
  //   this.personasService.agregarPersona(persona);
  // }
}

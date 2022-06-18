import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(
    private logginService: LoggingService,
    private personasService: PersonaService
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert(`El indice es ${indice}`)
    );
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.logginService.enviaMensajeConsola(
    //   'Enviamos persona:' + persona1.nombre + persona1.apellido
    // );
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}

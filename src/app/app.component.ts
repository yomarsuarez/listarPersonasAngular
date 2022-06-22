import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCeVqn6CHiRZuogioQs-AFbnbBLd8Q59sw',
      authDomain: 'listadopersonas-b1839.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }
  salir() {
    this.loginService.logoute();
  }

  // personaAgregada(persona: Persona) {
  //   // this.logginService.enviaMensajeConsola(
  //   //   `Agregamos al arreglo la nueva persona: ${persona.nombre}`
  //   // );
  //   // this.personas.push(persona);
  //   this.personasService.agregarPersona(persona);
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<Persona[]>(
      'https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
        personas
      )
      .subscribe(
        (response) => console.log(`resultado de guardar personas ${response}`),
        (error) => console.log(`Error en la respuesta ${error}`)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = `https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log(`resultado modificar persona: ${response}`),
      (error) => console.log(`Error modificar persona ${error}`)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = `https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos/${index}.jsonauth=${token}`;
    this.httpClient.delete(url).subscribe(
      (response) => console.log(`resultado eliminar persona: ${response}`),
      (error) => console.log(`Error eliminar persona ${error}`)
    );
  }
}

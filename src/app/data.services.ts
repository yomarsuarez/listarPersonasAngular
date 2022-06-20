import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get<Persona[]>(
      'https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos.json'
    );
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (response) => console.log(`resultado de guardar personas ${response}`),
        (error) => console.log(`Error en la respuesta ${error}`)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url = `https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log(`resultado modificar persona: ${response}`),
      (error) => console.log(`Error modificar persona ${error}`)
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    url = `https://listadopersonas-b1839-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.delete(url).subscribe(
      (response) => console.log(`resultado eliminar persona: ${response}`),
      (error) => console.log(`Error eliminar persona ${error}`)
    );

  }

}

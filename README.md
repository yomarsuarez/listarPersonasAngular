Documentación Baguer S.A.S.

# ListadoPersonas

Proyecto Generado en Angular 13, el cual se basa en un CRUD en el que inicialmente realizamon un login, y posterior a ello mediante los metodos POST, GET, PUT y DELETE realizamos la funcionalidad de crear, leer, editar y eliminar cada uno de los elementos.

## Login

En este proyecto personal y académico, utilizo los servicios de Firebase para la base de datos y como despliegue en desarrollo.

Para la autenticación se usa el usuario yomaralveiro.suarez@gmail.com y la clave es: 1234566.

Respecto a la protección de rutas utilizamos los Guards, archivo login-guard, los cuales limitan o permiten el acceso a la aplicación según si el usuario se encuentra autenticado. En la autenticación creamos un servicio, archivo login.service, el cual nos devuelve el token para que permita el acceso del usuario autenticado.
Posteiormente el componente de typescript, archivo login.component.ts valida el formulario y permite el acceso, esto se refleja en la plantilla HTML del mismo componente.

## Formulario

En este componente, validamos si la información que se agrega, va a ser guardada o editada, esto se define si la persona registrada tiene un ID, si tiene ID es para editar, caso contrario es un registro nuevo.

## Personas

El componente personas tiene el arreglo donde se almacena la información, y mediante el ciclo de vida inicial OnInit y el medoto setPersonas, lista la información que se encuentra en la base de datos Firebase. Esta información se hace visible en la plantilla HTML usando la directiva \*ngFor la cual itera sobre cada unos de los elementos del arreglo y los va mostrando en pantalla.

## Manejo de rutas con el AppRoutingModule

Mediante este modulo, podemos navegar a cada unos de los componentes solicitados, obvimante según la autenticación de los usuarios.

## Componentes Padre AppComponent

En la plantilla HTML verificamos mediante la directiva \*ngIf si el usuario se encuentra autenticado.

## DataServices

En este serivio, utilizamos el serivicio HttpClient para realizar las peticiones. Y en este archivo observamos los metodos cargarPersonas, guardarPersonas, modificarPersona y eliminarPersona.

Fin breve documentación de proyecto realizado en Angular13.

==============================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

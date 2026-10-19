# AppPrueba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Versión de Node

Angular 17 requiere **Node `^18.13.0 || >=20.9.0`**. Node 17.x no es compatible: el CLI
aborta con `The Angular CLI requires a minimum of v18.13`.

```powershell
fnm use 18.19.1
npm start
```

## Ruta `/list`

`/list` consume `GET https://qa.n8n.dalton.com.mx/webhook/dsn/cars` mediante
[`CarsService`](src/app/cars/cars.service.ts) y muestra la respuesta en una etiqueta `<p>`.
La raíz `/` redirige a `/list`.

### Autenticación del webhook

El endpoint responde `401` sin encabezado de autenticación. El valor **no se versiona**:
se define localmente en [`src/environments/environment.ts`](src/environments/environment.ts)
(`carsApiAuthHeaderName` / `carsApiAuthHeaderValue`) o se inyecta por pipeline. Si el valor
está vacío, la petición se envía sin encabezado y la pantalla muestra el error del servicio.

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

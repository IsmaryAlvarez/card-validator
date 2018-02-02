# Validador de Tarjetas de Crédito

* **Sprint:** 5


***


## Reto

Crear una librería de JavaScript que permita la validación de una tarjeta de crédito.

## Consideraciones

- Requerimientos Técnicos:

El proyecto fue realizado con las siguientes dependencias NPM:

+ Dependencias de Desarrollo (uso como desarrollador para las tareas):
  - Mocha ~v.5.0.0
  - Babel-present-env ~v.1.6.1
  - Eslint ~v.4.15.0
  - Eslint-config-google ~v.0.9.1
  - Chai ~v.4.1.2
  - Node ~v.9.4.0
  - Npm ~v.5.6.0
  - Browserify ~v.15.2.0
  - JsDom


+ Dependencias de Producción (funcionalidad):
  - Bootstrap ~v.4.0.0


## Instalación:
1.- Inicializar tu proyecto desde la terminal utilizando el comando:

`npm init`

2.- Descarga la librería desde el terminal utilizando el comando:

`npm install tdd-validator`

3.- Instalar Browserify de manera global en tu computadora:

`npm install -g browserify`

4.- Crea una carpeta `dist` y una `src` en la raíz de tu proyecto con el archivo `app.js` dentro de cada una, luego ejecuta Browserify con el siguiente comando:

`browserify src/app.js -o dist/app.js`

5.- Enlaza el archivo 'Browserificado' en tu .html:

`<script src="dist/app.js"></script>`

6.- En tu archivo .js principal pega el siguiente código:

`var tddValidator = require('tdd-validator');`

7.- Agregar atributo name a los input con los siguientes valores:

- Input Número de Tarjeta: agregar atributo *name='cn'*
- Input Fecha de Vencimiento: agregar atributo *name='exp'*
- Input cvv: agregar atributo *name='cvv'*
- Input Nombre Completo: agregar atributo *name='name'*
- Agregar atributo id con los mismos nombres del atributo name. 

<form class="container" id="myForm">
    <div class="form-group">
      <label for="cn">Número de tarjeta</label>
      <input id="cn" name="cn" />
    </div>
    <div class="form-group">
      <label for="exp">Fecha de vencimiento</label>
      <input id="exp" name="exp" placeholder="mm/aa" />
    </div>
    <div class="form-group">
      <label for="cvv">CVV</label>
      <input id="cvv" name="cvv" />
    </div>
    <div class="form-group">
      <label for="name">Nombre completo</label>
      <input id="name" name="name" />
    </div>
    <input type="submit" value="Pagar" />
  </form>

Y Listo... ya tienes tu validador de tarjetas!!!! 

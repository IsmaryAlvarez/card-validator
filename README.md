# Validador de Tarjetas de Crédito

* **Sprint:** 5


***


## Reto

Crear una librería de JavaScript que permita la validación de una tarjeta de crédito.

## Consideraciones

* El proyecto está compuesto por una serie de archivos entre los cuales se
encuentra el archivo base `index.html`, así como también el `index.js`.

## A tener en cuenta:

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


## Instalacion
1. Clonar repositorio.
2. Agregar atributo name a los input con los siguientes valores:
- Input Número de Tarjeta = agregar atributo *name='cn'*
- Input Fecha de Vencimiento = agregar atributo *name='exp'*
- Input cvv = agregar atributo *name='cvv'*
- Input Nombre Completo = agregar atributo *name='name'*
- Agregar atributo id con los mismos nombres del atributo name. 

+ En el .html 
...
<script type="text/javascript" src="index.js"></script>
...

+ por NPM 
...

...

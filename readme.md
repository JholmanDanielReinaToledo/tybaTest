# Proyecto API

## Introducción

Este proyecto es un backend desarrollado en TypeScript utilizando Express, Node.js, TypeORM y Joi. Se conecta a una base de datos en Postgres.

Implementa:
- manejo de usuarios.
- Peticiones de lugares con FOURSQUARE.
- Logs de backend.

## Versiones

- Node: 20.11.0

## Requisitos previos

- Node.js v20.11.0
- Docker
- Docker Compose
- Yarn

## Instrucciones

1. **Incluir el Dockerfile**:
   - Asegúrate de incluir en la raíz del proyecto el archivo `Dockerfile` que se envía por correo. Este archivo contendrá las variables de entorno necesarias.

2. **Ejecutar Docker localmente**:
   - Usa el siguiente comando para instalar dependencias, construir el proyecto y levantar los servicios con Docker:
     ```sh
     yarn && yarn build && docker-compose -f docker-compose.yml up
     ```
     
## Uso del API

- Se adjunta en el correo una colección de Postman con ejemplos de cómo usar el API.

## Arquitectura de la API

![image](https://github.com/JholmanDanielReinaToledo/tybaTest/assets/84155110/ce829b5a-b44a-400f-9dfc-60073e680558)




# Proyecto API

## Versiones

- Node: 20.11.0

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

![image](https://github.com/JholmanDanielReinaToledo/tybaTest/assets/84155110/26e326f2-0748-4c75-8c4c-9f2d8c98571d)


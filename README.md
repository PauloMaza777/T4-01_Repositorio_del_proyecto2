# API RESTful con Node.js

Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js,
con implementación en contenedores de Docker.

## Entidades a Utilizar

- Usuarios: Registro de usuarios que acceden a la plataforma, almacenando información como nombres de usuario, correos electrónicos y detalles adicionales.

- Foros: Contiene detalles sobre los foros disponibles, incluyendo nombres, descripciones y atributos adicionales.

- Publicaciones: Registra todas las publicaciones realizadas en los foros, con información como títulos, contenido y fechas.

- Notificaciones: Almacena notificaciones enviadas a usuarios, incluyendo mensajes y detalles temporales.

- Registro de Actividad: Mantiene un historial de acciones y actividades realizadas en la plataforma, proporcionando un seguimiento detallado para análisis.


## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/francerz/node-restful.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)
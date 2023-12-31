# Endpoint: `CRUD /usuarios/{id}`

En este apartado estaremos hablando sobre la tabla usuarios , en donde se estaran registrando los datos mas importantes de los usuarios, como por ejemplo, su id, nombre, correo electronico, contraseña, nombre entre muchos otros

Aqui es en donde se estaran encargando de estar mandando los registros de los usuarios creados dentro del foro

Posteriormente se estara hablando con mas a detalle todos los apartados que debe de tener y como debe de cumplirse

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_usuario": "PauloMaza",
    "correo_electronico": "paa.hueson123@gmail.com",
    "contraseña": "123456789",
    "nombre": "PauloEsteban",
    "apellidos": "MazaRivera",
    "fecha_nacimiento": "2001-11-16T00:00:00.000Z",
    "genero": "masculino",
    "pais": "Mexico",
    "ciudad": "colima",
    "intereses": "Tecnologia"
}
```

## Ejemplo de Solicitud
```http
POST /usuarios/7
```
## Respuesta Exitosa (Código 201 Created)
```json
{
    "id": 7,
    "nombre_usuario": "TelmaBarbara",
    "correo_electronico": "tee.barby@gmail.com",
    "contraseña": "123456789",
    "nombre": "TelmaBarbara",
    "apellidos": "RiveraPerez",
    "fecha_nacimiento": "1971-05-23",
    "genero": "Femenina",
    "pais": "Mexico",
    "ciudad": "colima",
    "intereses": "Moda"
}
```

## Ejemplo de Solicitud
```http
PUT /usuarios/1

```
- El método PUT tiene en este caso 2 posibles casos de respuestas satisfactorias, el 200 y el 201, como se ve a continuación.

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_usuario": "Paulo Esteban Maza Rivera",
    "correo_electronico": "paa.hueson123@gmail.com",
    "contraseña": "123456789",
    "nombre": "PauloEsteban",
    "apellidos": "MazaRivera",
    "fecha_nacimiento": "2001-11-16",
    "genero": "masculino",
    "pais": "Mexico",
    "ciudad": "colima",
    "intereses": "Tecnologia, Deporte y videojuegos"
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
    "id": 1,
    "nombre_usuario": "Paulo Esteban Maza Rivera",
    "correo_electronico": "paa.hueson123@gmail.com",
    "contraseña": "123456789",
    "nombre": "PauloEsteban",
    "apellidos": "MazaRivera",
    "fecha_nacimiento": "2001-11-16",
    "genero": "masculino",
    "pais": "Mexico",
    "ciudad": "colima",
    "intereses": "Tecnologia, Deporte y videojuegos"
}
```

## Ejemplo de Solicitud
```http
PATCH /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_usuario": "PauloMazaaaa",
    "correo_electronico": "20460351@colima.tecnm.mx",
    "contraseña": "987654321",
    "nombre": "PauloEsteban",
    "apellidos": "MazaRivera",
    "fecha_nacimiento": "2001-11-16T00:00:00.000Z",
    "genero": "masculino",
    "pais": "Mexico",
    "ciudad": "colima",
    "intereses": "Deporte"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request

  La solicitud no pudo ser entendida o estaba mal formada.
  ```json
  {
    "errno": 400,
    "error": "Bad Request",
    "error_description": "La solicitud no esta bien formulada"
  }
  ```

- Código 401 Unauthorized:

  Se requiere autenticación y/o autorización para acceder al recurso, pero no se proporcionaron o fueron incorrectos.
  ```json
  {
    "errno": 401,
    "error": "Unauthorized",
    "error_description": "Se requiere autorización al recurso solicitado"
  }

- Código 403 Forbidden:

  El servidor entendió la solicitud, pero se niega a cumplirla debido a restricciones en el acceso al recurso.
  ```json
  {
    "errno": 403,
    "error": "Forbidden",
    "error_description": "El servidor rechazo la solicitud al recurso"
  }
  ```

- Código 404 Not Found:

  Este error indica que la página solicitada por el usuario no se encontró en el servidor
  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
  }
  ```

- Código 409 Conflict:

  Indica que la solicitud no pudo ser completada debido a un conflicto con el estado actual del recurso. Por ejemplo, podría ocurrir en una solicitud PUT o POST si hay un conflicto en los datos que se están intentando modificar o crear.
  ```json
  {
    "errno": 409,
    "error": "Conflict",
    "error_description": "Error al completar la solicitud"
  }
  ```

- Código 500 Internal Server Error:

  Este error indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Para consultar más detalle sobre las entidades de las base de datos puede consultar aqui : [`README-GENERAL`](../../README.md).
- Para la elaboracion de este trabajo fue llevado a cabo mediante el DBaver la cual es una aplicación de software cliente de SQL y una herramienta de administración de bases de datos. [DBeaver](https://dbeaver.io).
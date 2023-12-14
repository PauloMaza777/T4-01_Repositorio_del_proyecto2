# Endpoint: `CRUD /registro de actividad /{id}`

En este apartado estaremos hablando sobre la tabla Registro de actividades, en donde se estaran registrando los nombres, la descripción y la categoria de las actividades registradas

Aqui es en donde se estaran encargando de estar registrando las actividades de los foros

Posteriormente se estara hablando con mas a detalle todos los apartados que debe de tener y como debe de cumplirse

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /registro_actividad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id": "1",
  "usuario_id": "1",
  "tipo_actividad": "login",
  "detalles": "Inicio de sesion exitoso ",
  "fecha_hora": "2023-04-05"
}
```

## Ejemplo de Solicitud
```http
POST /registro_actividad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id": "3",
  "usuario_id": "3",
  "tipo_actividad": "logout",
  "detalles": "Inicio de sesion exitoso en la plataforma de tecnología",
  "fecha_hora": "2023-04-05"
}
```

## Ejemplo de Solicitud
```http
PUT /registro_actividad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id": "1",
  "usuario_id": "1",
  "tipo_actividad": "login",
  "detalles": "Inicio de sesion exitoso en la plataforma de videojugos",
}
```

## Ejemplo de Solicitud
```http
PATCH /registro_actividad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "tipo_actividad": "eliminar_publicación",
  "detalles": "Eliminación de una nueva publicación",
  "fecha_hora": "2023-04-05"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  Este error indica que la página solicitada por el usuario no se encontró en el servidor
  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
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
# Endpoint: `CRUD /foro/{id}`

En este apartado estaremos hablando sobre la tabla foro, en donde se estaran registrando los datos del id, nombre, descripcion, categoria, y fecha de creacion del foro.

Aquí es en donde se crearan los diferentes tipos de foros para cualquier tipo de categorias, ya sea para cualquier tipo de videojuegos o noticias especificas para un tema en especial.

Posteriormente se estara hablando con mas a detalle todos los apartados que debe de tener y como debe de cumplirse

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /foro/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre": "Foro General de videojuegos",
    "descripcion": "Foro para discusiones generales",
    "categoria": "general",
    "fecha_creacion": "2023-01-01T00:00:00.000Z"
}
```

## Ejemplo de Solicitud
```http
POST /foro/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 3,
    "nombre": "Foro para desarrolladores",
    "descripcion": "Foro de Desarrollo de cualquier videojuego",
    "categoria": "Tecnología",
    "fecha_creacion": "2023-02-15"
}
```

## Ejemplo de Solicitud
```http
PUT /foro/1
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 2,
    "nombre": "Tecnologia avanzada para desarrolladores de videojuegos",
    "descripcion": "Discución sobre las ultimas innovaciones tecnológicas",
    "categoria": "Tecnología",
}
```

## Ejemplo de Solicitud
```http
PATCH /foro/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "nombre": "Foro para desarrolladores",
    "descripcion": "Foro de Desarrollo de cualquier videojuego como fortnite",
    "categoria": "general",
    "fecha_creacion": "2023-02-15"
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
create database if not exists plataformaForo;

use plataformaForo;

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_usuario VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  genero ENUM('masculino', 'femenino') NOT NULL,
  pais VARCHAR(255) NOT NULL,
  ciudad VARCHAR(255) NOT NULL,
  intereses VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE foros (
  id INT NOT NULL AUTO_INCREMENT,
  tituloTema VARCHAR(50) NOT NULL,
  nombreAutor VARCHAR(255) NOT NULL,
  -- categoria ENUM('general', 'tecnología', 'deportes', 'entretenimiento', 'otros') NOT NULL,
  fecha_creacion DATE NOT NULL,
  descripcion TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE publicaciones (
  id INT NOT NULL AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  foro_id INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT NOT NULL,
  fecha_publicacion DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
  FOREIGN KEY (foro_id) REFERENCES foros (id)
);

CREATE TABLE notificaciones (
  id INT NOT NULL AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  mensaje TEXT NOT NULL,
  fecha_envio DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE registro_actividad (
  id INT NOT NULL AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  tipo_actividad ENUM('login', 'logout', 'crear_publicacion', 'editar_publicacion', 'eliminar_publicacion', 'ver_publicacion', 'responder_publicacion', 'notificar_usuario') NOT NULL,
  detalles TEXT NOT NULL,
  fecha_hora datetime NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);




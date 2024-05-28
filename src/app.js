const express = require('express');
const cors = require('cors');

const app = express();
const puerto = 80;

const UsuariosController = require('./controllers/UsuariosControllers');
const ForoController = require('./controllers/ForoControllers');
const PublicacionesController = require('./controllers/PublicacionesControllers');
const NotificacionesController = require('./controllers/NotificacionesControllers');
const Registro_ActividadController = require('./controllers/Registro_ActividadControllers');


// Configurar CORS
app.use(cors());


app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.put('/usuarios/:id([0-9]+)', UsuariosController.editar);
app.post('/usuarios', UsuariosController.agregar);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);


app.get('/foros', ForoController.indexGet);
app.get('/foros/:id([0-9]+)', ForoController.itemGet);
app.put('/foros/:id([0-9]+)', ForoController.editar);
app.post('/foros', ForoController.agregar);
app.patch('/foros/:id([0-9]+)', ForoController.itemPatch);


app.get('/publicaciones', PublicacionesController.indexGet);
app.get('/publicaciones/:id([0-9]+)', PublicacionesController.itemGet);
app.put('/publicaciones/:id([0-9]+)', PublicacionesController.editar);
app.post('/publicaciones', PublicacionesController.agregar);
app.patch('/publicaciones/:id([0-9]+)', PublicacionesController.itemPatch);


app.get('/notificaciones', NotificacionesController.indexGet);
app.get('/notificaciones/:id([0-9]+)', NotificacionesController.itemGet);
app.put('/notificaciones/:id([0-9]+)', NotificacionesController.editar);
app.post('/notificaciones', NotificacionesController.agregar);
app.patch('/notificaciones/:id([0-9]+)', NotificacionesController.itemPatch);


app.get('/registro_actividad', Registro_ActividadController.indexGet);
app.get('/registro_actividad/:id([0-9]+)', Registro_ActividadController.itemGet);
app.put('/registro_actividad/:id([0-9]+)', Registro_ActividadController.editar);
app.post('/registro_actividad', Registro_ActividadController.agregar);
app.patch('/registro_actividad/:id([0-9]+)', Registro_ActividadController.itemPatch);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});
const { connectMysql } = require('../dbconnection');
class NotificacionesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('notificaciones');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('notificaciones').where('id', id);
    }

    static async editar(id, notificaciones) {
        let db = await connectMysql();

        let query = db('notificaciones')
            .where({ id: id })
            .update(notificaciones)
        return await query;
    }

    static async agregar(notificaciones) {
        let db = await connectMysql();
        let query = db('notificaciones').insert(notificaciones)
        return await query;
    }

    static async actualizar(id, notificaciones) {
        let db = await connectMysql();
        return await db('notificaciones').where('id', id).update(notificaciones);
    }
}

module.exports = NotificacionesModel;
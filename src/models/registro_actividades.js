const { connectMysql } = require('../dbconnection');
class registro_actividadModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('registro_actividad');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('registro_actividad').where('id', id);
    }

    static async editar(id, registro_actividad) {
        let db = await connectMysql();

        let query = db('registro_actividad')
            .where({ id: id })
            .update(registro_actividad)
        return await query;
    }

    static async agregar(registro_actividad) {
        let db = await connectMysql();
        let query = db('registro_actividad').insert(registro_actividad)
        return await query;
    }

    static async actualizar(id, registro_actividad) {
        let db = await connectMysql();
        return await db('registro_actividad').where('id', id).update(registro_actividad);
    }
}

module.exports = registro_actividadModel;
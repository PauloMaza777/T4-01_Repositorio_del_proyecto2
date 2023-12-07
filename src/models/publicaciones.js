const { connectMysql } = require('../dbconnection');
class publicacionesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('publicaciones');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('publicaciones').where('id', id);
    }

    static async editar(id, publicaciones) {
        let db = await connectMysql();

        let query = db('publicaciones')
            .where({ id: id })
            .update(publicaciones)
        return await query;
    }

    static async agregar(publicaciones) {
        let db = await connectMysql();
        let query = db('publicaciones').insert(publicaciones)
        return await query;
    }

    static async actualizar(id, publicaciones) {
        let db = await connectMysql();
        return await db('publicaciones').where('id', id).update(publicaciones);
    }
}

module.exports = publicacionesModel;
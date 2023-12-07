const { connectMysql } = require('../dbconnection');
class ForoModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('foros');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('foros').where('id', id);
    }

    static async editar(id, foros) {
        let db = await connectMysql();

        let query = db('foros')
            .where({ id: id })
            .update(foros)
        return await query;
    }

    static async agregar(foros) {
        let db = await connectMysql();
        let query = db('foros').insert(foros)
        return await query;
    }

    static async actualizar(id, foros) {
        let db = await connectMysql();
        return await db('foros').where('id', id).update(foros);
    }
}

module.exports = ForoModel;
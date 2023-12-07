const { connectMysql } = require('../dbconnection');
class UsuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id', id);
    }
    static async editar(id, usuarios) {
        let db = await connectMysql();

        let query = db('usuarios')
            .where({ id: id })
            .update(usuarios)
        return await query;
    }

    static async agregar(usuarios) {
        let db = await connectMysql();
        let query = db('usuarios').insert(usuarios)
        return await query;
    }

    static async actualizar(id, usuarios) {
        let db = await connectMysql();
        return await db('usuarios').where('id', id).update(usuarios);
    }
}


module.exports = UsuariosModel;
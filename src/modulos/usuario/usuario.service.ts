import { Injectable } from '@nestjs/common';
import { Usuario } from 'entidades/usuario.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class UsuarioService {
    /**
     * Metodo para insetar un nuevo usuario
     * @param usuario: Objeto json con los datos de usuario.
     */
    async insertarUsuario(usuario) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values(usuario)
            .execute();
    }
    /**
     * Método que permite obtener todos los usuarios alamacenados
     */
    async obtenerTodosLosUsuarios() {
        const usuarios = await getRepository(Usuario)
            .createQueryBuilder('usuario')
            .getMany();
        return usuarios;
    }
    /**
     * Metodo para obtener todos los atributos del usuario en ormato json conociendo la id de usuario
     * @param idABuscar: Id de usuario a buscar
     */
    async obtenerusuarioPorId(idABuscar: number) {
        const usuarioPorId = await getRepository(Usuario)
            .createQueryBuilder('usuario')
            .where('usuario.idusuario = :id', { id: idABuscar })
            .getOne();
        return usuarioPorId;
    }
    /**
     * Método que permite actualizar todos los datos del usuario conociendo la id del mismo
     * @param idAActualizar id del usuario que se va a actualizar
     * @param datosAcualizados objeto json de los datos que se van a actualizar
     */
    async actualizarUsuario(idAActualizar: number, datosAcualizados) {
        await getConnection()
            .createQueryBuilder()
            .update(Usuario)
            .set(datosAcualizados)
            .where('idusuario = :id', { id: idAActualizar })
            .execute();
    }
    /**
     * Metodo para eliminar un usuario por id
     * @param idAEliminar: Id del usuario que se va a eliminar
     */
    async eliminarUsuarioPorId(idAEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Usuario)
            .where('idusuario = :id', { id: idAEliminar })
            .execute();
    }

}
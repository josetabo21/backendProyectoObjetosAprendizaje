import { Injectable } from '@nestjs/common';
import { Profesor } from 'entidades/profesor.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class ProfesorService {
    /**
     * Metodo para insetar un nuevo profesor
     * @param profesor: Objeto json con los datos del profesor.
     */
    async insertarProfesor(profesor) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Profesor)
            .values(profesor)
            .execute();
    }
    /**
     * Método que permite obtener todos los profesores alamacenados
     */
    async obtenerTodosLosProfesores() {
        const profesores = await getRepository(Profesor)
            .createQueryBuilder('profesor')
            .getMany();
        return profesores;
    }
    /**
     * Metodo para obtener todos los atributos del profesor en formato json conociendo la id de profesor
     * @param idABuscar: Id del profesor a buscar
     */
    async obtenerProfesorPorId(idABuscar: number) {
        const profesorPorId = await getRepository(Profesor)
            .createQueryBuilder('profesor')
            .where('profesor.idprofesor = :id', { id: idABuscar })
            .getOne();
        return profesorPorId;
    }
    /**
     *  Método que permite actualizar todos los datos del profesor conociendo la id del mismo
     * @param idAActualizar id del profesor que se va a actualizar
     * @param datosAcualizados objeto json de los datos que se van a actualizar
     */
    async actualizarProfesor(idAActualizar: number, datosAcualizados) {
        await getConnection()
            .createQueryBuilder()
            .update(Profesor)
            .set(datosAcualizados)
            .where('idprofesor = :id', { id: idAActualizar })
            .execute();
    }
    /**
     * Metodo para eliminar un profesor por id
     * @param idAEliminar: Id del profesor que se va a eliminar
     */
    async eliminarProfesorPorId(idAEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Profesor)
            .where('idprofesor = :id', { id: idAEliminar })
            .execute();
    }
}
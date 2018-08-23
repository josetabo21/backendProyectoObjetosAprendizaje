import { Injectable } from '@nestjs/common';
import { getConnection, getRepository } from 'typeorm';
import { Estudiante } from 'entidades/estudiante.entity';

@Injectable()
export class EstudianteService {
    /**
     * Metodo para insetar un nuevo estudiante
     * @param estudiante: Objeto json con los datos de estudiante.
     */
    async insertarEstudiante(estudiante) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Estudiante)
            .values(estudiante)
            .execute();
    }
    /**
     * Método que permite obtener todos los estudiantes alamacenados
     */
    async obtenerTodosLosEstudiantes() {
        const estudiantes = await getRepository(Estudiante)
            .createQueryBuilder('estudiante')
            .getMany();
        return estudiantes;
    }
    /**
     * Metodo para obtener todos los atributos del estudaiante en formato json conociendo la id de estudiante
     * @param idABuscar: Id de estudiante a buscar
     */
    async obtnerEstudiantePorId(idABuscar: number){
        const estudiantePorId = await getRepository(Estudiante)
        .createQueryBuilder('estudiante')
        .where('estudiante.idestudiante = :id', {id: idABuscar})
        .getOne();
        return estudiantePorId;
    }
    /**
     * Método que permite actualizar todos los datos del estudiante conociendo la id del mismo
     * @param idAActualizar id del estudiante que se va a actualizar
     * @param datosAcualizados objeto json de los datos que se van a actualizar
     */
    async actualizarEstudiante(idAActualizar: number, datosAcualizados) {
        await getConnection()
            .createQueryBuilder()
            .update(Estudiante)
            .set(datosAcualizados)
            .where('idestudiante = :id', { id: idAActualizar })
            .execute();
    }
    /**
     * Metodo para eliminar un estudiante por id
     * @param idAEliminar: Id del estudiante que se va a eliminar
     */
    async eliminarEstudiantePorId(idAEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Estudiante)
            .where('idestudiante = :id', { id: idAEliminar })
            .execute();
    }

}
import { Injectable } from '@nestjs/common';
import { getConnection, getRepository } from 'typeorm';
import { Facultad } from 'entidades/facultad.entity';

@Injectable()
export class FacultadService{
    /**
     * Metodo para insetar una nueva facultad
     * @param facultad: Objeto json con los datos de facultad.
     */
    async insertarfacultad(facultad) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Facultad)
            .values(facultad)
            .execute();
    }
    /**
     * Método que permite obtener todos las facultades alamacenados
     */
    async obtenerTodasLasFacultades(){
        const facultades = await getRepository(Facultad)
        .createQueryBuilder('facultad')
        .getMany();
        return facultades;
    }
    /**
     * Metodo para obtener todos los atributos del estudaiante en formato json conociendo la id de estudiante
     * @param idABuscar: Id de estudiante a buscar
     */
    async obtenerFacultadPorId(idABuscar: number){
        const facultadPorId = await getRepository(Facultad)
        .createQueryBuilder('facultad')
        .where('facultad.idfacultad = :id', {id: idABuscar})
        .getOne();
    }
    /**
     * Método que permite actualizar todos los datos de una facultad conociendo la id de lamisma
     * @param idAActualizar id del facultad que se va a actualizar
     * @param datosAcualizados objeto json de los datos que se van a actualizar
     */
    async actualizarFacultad(idAActualizar: number, datosAcualizados) {
        await getConnection()
            .createQueryBuilder()
            .update(Facultad)
            .set(datosAcualizados)
            .where('idfacultad = :id', { id: idAActualizar })
            .execute();
    }
    /**
     * Metodo para eliminar uan facultad por id
     * @param idAEliminar: Id de la facultad que  se va a eliminar
     */
    async eliminarFacultadPorId(idAEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Facultad)
            .where('idfacultad = :id', { id: idAEliminar })
            .execute();
    }

}
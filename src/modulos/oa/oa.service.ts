import { Injectable } from '@nestjs/common';
import { OA } from 'entidades/oa.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class OAService{
    /**
     * Metodo para insetar un nuevo oa
     * @param oa: Objeto json con los datos del oa.
     */
    async insertarOA(oa) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(OA)
            .values(oa)
            .execute();
    }

    /**
     * Método que permite obtener todos los oas almacenados
     */
    async obtenerTodosLosOAS() {
        const oas = await getRepository(OA)
            .createQueryBuilder('oa')
            .getMany();
        return oas;
    }

    /**
     * Metodo para obtener todos los atributos del oa en formato json conociendo la id del oa
     * @param idABuscar: Id del oa a buscar
     */
    async obtnerOAPorId(idABuscar: number){
        const oaPorId = await getRepository(OA)
        .createQueryBuilder('oa')
        .where('oa.idoa = :id', {id: idABuscar})
        .getOne();
        return oaPorId;
    }

    /**
     * Método que permite actualizar todos los datos del oa conociendo la id del mismo
     * @param idAActualizar id del oa que se va a actualizar
     * @param datosAcualizados objeto json de los datos que se van a actualizar
     */
    async actualizarOA(idAActualizar: number, datosAcualizados) {
        await getConnection()
            .createQueryBuilder()
            .update(OA)
            .set(datosAcualizados)
            .where('idoa = :id', { id: idAActualizar })
            .execute();
    }

    /**
     * Metodo para eliminar un oa por id
     * @param idAEliminar: Id del oa que se va a eliminar
     */
    async eliminarOAPorId(idAEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(OA)
            .where('idoa = :id', { id: idAEliminar })
            .execute();
    }
}
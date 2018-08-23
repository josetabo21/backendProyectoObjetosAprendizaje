import { Controller, Post, Body, Get, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { OAService } from './oa.service';
import { OA } from 'entidades/oa.entity';
import { PipeGenerico } from '../validaciones/pipe.generico';
import { EsquemasDeValidacion } from '../validaciones/esquemas.validacion';

@Controller('oa')
export class OAControler{
    constructor(private servicioOA: OAService){
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemasDeValidacion().esquemaObjetos))
    insertarOA(@Body() bodyParametros){
        const oa = {
            idoa: bodyParametros.idoa,
            nombre: bodyParametros.nombre,
            descripcion: bodyParametros.descripcion,
            fechacreacion: bodyParametros.fechacreacion,
            palabrasclaves: bodyParametros.palabrasclaves,
            tamanio: bodyParametros.tamanio,
            ruta: bodyParametros.ruta,
            usuario: bodyParametros.usuario,
        };
        this.servicioOA.insertarOA(oa);
    }

    @Get()
    obtenerTodosLosOAS(){
        return this.servicioOA.obtenerTodosLosOAS();
    }

    @Get('/:id')
    obtenerOAPorId(@Param() paramParametros){
        return this.servicioOA.obtnerOAPorId(paramParametros.id);
    }

    @Put('/:id')
    actualizarOAPorId(@Body() bodyParametros, @Param() paramParametros){
        const idOA = paramParametros.id;
        const datosActualizados = {
            nombre: bodyParametros.nombre,
            descripcion: bodyParametros.descripcion,
            fechacreacion: bodyParametros.fechacreacion,
            palabrasclaves: bodyParametros.palabrasclaves,
            tamanio: bodyParametros.tamanio,
            ruta: bodyParametros.ruta,
            usuario: bodyParametros.usuario,
        };
        this.servicioOA.actualizarOA(idOA, datosActualizados);
    }

    @Delete(':/id')
    eliminaroa(@Param() paramParametros){
        this.servicioOA.eliminarOAPorId(paramParametros.id);
    }
}

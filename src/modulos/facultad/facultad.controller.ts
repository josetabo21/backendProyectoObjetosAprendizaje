import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { FacultadService } from './facultad.service';
import { Facultad } from 'entidades/facultad.entity';
import { PipeGenerico } from '../validaciones/pipe.generico';
import { EsquemasDeValidacion } from '../validaciones/esquemas.validacion';

@Controller('facultad')
export class FacultadController{
    constructor(private servicioFacultad: FacultadService){
    }

    @Post()
    @UsePipes(new PipeGenerico(new EsquemasDeValidacion().esquemaFacultad))
    insertarFacultad(@Body() bodyParametros){
        const facultad = {
            idfacultad: bodyParametros.idfacultad,
            facultad: bodyParametros.facultad,
        };
        this.servicioFacultad.insertarfacultad(facultad);
    }

    @Get()
    obtenerTodasLasFacultades(){
        return this.servicioFacultad.obtenerTodasLasFacultades();
    }

    @Get('/:id')
    obtenerFacultadPorId(@Param() paramParametros){
        return this.servicioFacultad.obtenerFacultadPorId(paramParametros.id);
    }

    @Put('/:id')
    actualizarFacultadPorId(@Param() paramParametros, @Body() bodyParametros){
        const idFacultad = paramParametros.id;
        const datosActualizados = {
            facultad: bodyParametros.facultad,
        };
        this.servicioFacultad.actualizarFacultad(idFacultad, datosActualizados);
    }

    @Delete('/:id')
    eliminarFacultadPorId(@Param() paramParametros){
        this.servicioFacultad.eliminarFacultadPorId(paramParametros.id);
    }

}
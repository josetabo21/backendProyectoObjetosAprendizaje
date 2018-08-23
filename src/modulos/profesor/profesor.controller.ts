import { Controller, Post, Body, Get, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { PipeGenerico } from '../validaciones/pipe.generico';
import { EsquemasDeValidacion } from '../validaciones/esquemas.validacion';

@Controller('profesor')
export class ProfesorController{
    constructor(private profesorService: ProfesorService){
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemasDeValidacion().esquemaProfesor))
    insertarProfesor(@Body() bodyParametros){
        const profesor = {
            idprofesor: bodyParametros.idprofesor,
            ci: bodyParametros.ci,
            nombres: bodyParametros.nombres,
            apellidos: bodyParametros.apellidos,
            mail: bodyParametros.mail,
            facultad: bodyParametros.facultad,
            usuario: bodyParametros.usuario,
        };
        this.profesorService.insertarProfesor(profesor);
    }

    @Get()
    obtenerTodosLosprofesores(){
        return this.profesorService.obtenerTodosLosProfesores();
    }

    @Get('/:id')
    obtenerProfesorPorId(@Param() paramParametros){
        return this.profesorService.obtenerProfesorPorId(paramParametros.id);
    }

    @Put('/:id')
    actualizarProfesor(@Param() paramParametros, @Body() bodyParametros) {
        const idProfesor = paramParametros.id;
        const datosActualizados = {
            ci: bodyParametros.ci,
            nombres: bodyParametros.nombres,
            apellidos: bodyParametros.apellidos,
            mail: bodyParametros.mail,
            facultad: bodyParametros.facultad,
            usuario: bodyParametros.usuario,
        };
        this.profesorService.actualizarProfesor(idProfesor, datosActualizados);
    }

    @Delete('/:id')
    eliminarEstudiantePorId(@Param() paramParametros){
        const idProfesor = paramParametros.id;
        this.profesorService.eliminarProfesorPorId(idProfesor);
    }

}
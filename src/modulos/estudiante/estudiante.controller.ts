import { Controller, Get, Body, Post, UsePipes, Param, Put, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { PipeGenerico } from '../validaciones/pipe.generico';
import { EsquemasDeValidacion } from '../validaciones/esquemas.validacion';
import { Estudiante } from 'entidades/estudiante.entity';

@Controller('estudiante')
export class EstudianteController {
    constructor(private estudianteService: EstudianteService) {
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemasDeValidacion().esquemaEstudiante))
    insertarEstudiante(@Body() bodyParametros) {
        const estudiante = {
            idestudiante : bodyParametros.idestudiante,
            ci : bodyParametros.ci,
            nombres : bodyParametros.nombres,
            apellidos : bodyParametros.apellidos,
            mail : bodyParametros.mail,
            carrera : bodyParametros.carrera,
            usuario : bodyParametros.usuario,
            facultad : bodyParametros.facultad,
        };
        this.estudianteService.insertarEstudiante(estudiante);
    }
    @Get()
    obtenerTodosLosEtudiantes(){
        return this.estudianteService.obtenerTodosLosEstudiantes();
    }

    @Get('/:id')
    obtenerEstudiantePorId(@Param() paramParametros){
        return this.estudianteService.obtnerEstudiantePorId(paramParametros.id);
    }

    @Put('/:id')
    actualizarEstudiante(@Param() paramParametros, @Body() bodyParametros) {
        const idEstudiante = paramParametros.id;
        const datosActualizados = {
            ci : bodyParametros.ci,
            nombres : bodyParametros.nombres,
            apellidos : bodyParametros.apellidos,
            mail : bodyParametros.mail,
            carrera : bodyParametros.carrera,
            usuario : bodyParametros.usuario,
            facultad : bodyParametros.facultad,
        };
        this.estudianteService.actualizarEstudiante(idEstudiante, datosActualizados);
    }

    @Delete('/:id')
    eliminarEstudiantePorId(@Param() paramParametros){
        const idEstudiante = paramParametros.id;
        this.estudianteService.eliminarEstudiantePorId(idEstudiante);
    }
}
import { Controller, Get, Body, Post, UsePipes, Param, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from 'entidades/usuario.entity';
import { PipeGenerico } from '../validaciones/pipe.generico';
import { EsquemasDeValidacion } from '../validaciones/esquemas.validacion';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemasDeValidacion().esquemaUsuario))
    insertarUsuario(@Body() bodyParametros) {
        const usuario = {
            idusuario: bodyParametros.idusuario,
            usuario: bodyParametros.usuario,
            contrasenia: bodyParametros.contrasenia,
            tipousuario: bodyParametros.tipousuario,
            activo: bodyParametros.activo,
        };
        this.usuarioService.insertarUsuario(usuario);
    }
    @Get()
    obtenerTodosLosUsuarios() {
        return this.usuarioService.obtenerTodosLosUsuarios();
    }

    @Get('/:id')
    obtenerUsuarioPorId(@Param() paramParametros) {
        return this.usuarioService.obtenerusuarioPorId(paramParametros.id);
    }

    @Put('/:id')
    actualizarUsuario(@Param() paramParametros, @Body() bodyParametros) {
        const idUsuario = paramParametros.id;
        const datosActualizados = {
            usuario: bodyParametros.usuario,
            contrasenia: bodyParametros.contrasenia,
            tipousuario: bodyParametros.tipousuario,
            activo: bodyParametros.activo,
        };
        this.usuarioService.actualizarUsuario(idUsuario, datosActualizados);
    }

    @Delete('/:id')
    eliminarUsuarioPorId(@Param() paramParametros){
        const idUsuario = paramParametros.id;
        this.usuarioService.eliminarUsuarioPorId(idUsuario);
    }
}
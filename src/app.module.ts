import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Usuario } from 'entidades/usuario.entity';
import { UsuarioModule } from 'modulos/usuario/usuario.module';
import { EstudianteModule } from 'modulos/estudiante/estudiante.module';
import { ProfesorModule } from 'modulos/profesor/profesor.module';
import { FacultadModule } from 'modulos/facultad/facultad.module';
import { OAModule } from 'modulos/oa/oa.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuarioModule, EstudianteModule, ProfesorModule, FacultadModule, OAModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

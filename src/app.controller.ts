import { Get, Controller } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Usuario } from 'entidades/usuario.entity';

@Controller()
export class AppController {
  constructor() {}

  @Get('ingresarUsuario')
  async ingresarUsuario() {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Usuario)
    .values({idusuario: 1, usuario: 'prueba', contrasenia: 'prueba', tipousuario: 'adm', activo: '1'})
    .execute();
    return 'hola que hace';
  }
}
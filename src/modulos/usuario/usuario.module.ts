import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controler';
import { UsuarioService } from './usuario.service';

@Module({
controllers: [UsuarioController],
providers: [UsuarioService],
},
)
export class UsuarioModule{
}
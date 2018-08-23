import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { OA } from './oa.entity';

@Entity('comentario')
export class Comentario{
    @PrimaryGeneratedColumn()
    idcomentario: number;

    @Column({length: 500})
    contenido: string;

    @ManyToOne(type => Usuario, usuario => usuario.comentarios, {onDelete: 'CASCADE'})
    usuario: Usuario;

    @ManyToOne(type => OA, oa => oa.comentarios, {onDelete: 'CASCADE'})
    oa: OA;

}
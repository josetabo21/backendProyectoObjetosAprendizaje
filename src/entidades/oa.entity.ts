import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Comentario } from './comentario.entity';

@Entity('oa')
export class OA{
    @PrimaryGeneratedColumn()
    idoa: number;

    @Column({length: 45})
    nombre: string;

    @Column({length: 500})
    descripcion: string;

    @Column({type: 'timestamp'})
    fechacreacion;

    @Column({length: 500})
    palabrasclaves: string;

    @Column({length: 45})
    tamanio: string;

    @Column({length: 500})
    ruta: string;

    @ManyToOne(type => Usuario, usuario => usuario.oas, {onDelete: 'CASCADE'})
    usuario: Usuario;

    @OneToMany(type => Comentario, comentario => comentario.oa )
    comentarios: Comentario[];

}

import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { Facultad } from './facultad.entity';
import { Usuario } from './usuario.entity';

@Entity('profesor')
export class Profesor {

    @PrimaryGeneratedColumn()
    idprofesor: number;

    @Column({ length: 10})
    ci: string;

    @Column({length: 45})
    nombres: string;

    @Column({length: 45})
    apellidos: string;

    @Column({length: 45})
    mail: string;

    @ManyToOne(type => Usuario, usuario => usuario.profesores, {onDelete: 'CASCADE'})
    usuario: Usuario;

    @ManyToOne(type => Facultad, facultad => facultad.profesores, {onDelete: 'CASCADE'})
    facultad: Facultad;
}
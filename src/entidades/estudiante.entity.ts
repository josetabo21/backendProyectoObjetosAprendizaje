import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Facultad } from './facultad.entity';

@Entity('estudiante')
export class Estudiante{

    @PrimaryGeneratedColumn()
    idestudiante: number;

    @Column({ length: 10})
    ci: string;

    @Column({length: 45})
    nombres: string;

    @Column({length: 45})
    apellidos: string;

    @Column({length: 45})
    mail: string;

    @Column({length: 45})
    carrera: string;

    @ManyToOne(type => Usuario, usuario => usuario.estudiantes, {onDelete: 'CASCADE'})
    usuario: Usuario;

    @ManyToOne(type => Facultad, facultad => facultad.estudiantes, {onDelete: 'CASCADE'})
    facultad: Facultad;

}
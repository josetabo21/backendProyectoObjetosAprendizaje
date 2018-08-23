import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Profesor } from './profesor.entity';
import { Estudiante } from './estudiante.entity';

@Entity('facultad')
export class Facultad {

    @PrimaryGeneratedColumn()
    idfacultad: number;

    @Column({ length: 45 })
    facultad: string;

    @OneToMany(type => Profesor, profesor => profesor.facultad)
    profesores: Profesor[];

    @OneToMany(type => Estudiante, estudiante => estudiante.facultad)
    estudiantes: Estudiante[];
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Estudiante } from './estudiante.entity';
import { Comentario } from './comentario.entity';
import { OA } from './oa.entity';

@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    idusuario: number;

    @Column({length: 45})
    usuario: string;

    @Column({length: 45})
    contrasenia: string;

    @Column({length: 3})
    tipousuario: string;

    @Column({length: 1})
    activo: string;

    @OneToMany(type => Profesor, profesor => profesor.usuario)
    profesores: Profesor[];

    @OneToMany(type => Estudiante, estudiante => estudiante.usuario)
    estudiantes: Estudiante[];

    @OneToMany(type => Comentario, comentario => comentario.usuario )
    comentarios: Comentario[];

    @OneToMany(type => OA, oa => oa.usuario )
    oas: OA[];
}
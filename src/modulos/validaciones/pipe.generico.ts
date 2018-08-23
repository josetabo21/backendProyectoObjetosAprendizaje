import { Injectable, PipeTransform, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';
import { ExcepcionPersonalizada } from './excepcion.personalizada';
@Injectable()
export class PipeGenerico implements PipeTransform{
    constructor(readonly esquemaDeValidacion: Joi.SchemaLike){
    }
    transform(valor: any){
        const{error} = Joi.validate(valor, this.esquemaDeValidacion);
        if (error){
            throw new ExcepcionPersonalizada({
                mensaje: 'Los parametros no se validaron',
                status: '400',
                error: {error},
            }, HttpStatus.BAD_REQUEST);
        }
        return valor;
    }
}
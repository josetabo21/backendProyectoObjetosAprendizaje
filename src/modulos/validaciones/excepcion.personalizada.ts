import { HttpException, HttpStatus } from '@nestjs/common';

export class ExcepcionPersonalizada extends HttpException{
    constructor(readonly mensaje: any, statusCode: number){
        super(mensaje, statusCode);
    }
}
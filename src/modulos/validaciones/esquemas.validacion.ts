import * as Joi from 'joi';
export class EsquemasDeValidacion{
    public esquemaUsuario = Joi.object().keys({
        idusuario: Joi.number().integer().min(1).max(1000),
        usuario: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        contrasenia: Joi.string().regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/),
        /*La contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. */
        tipousuario: Joi.string().regex(/^[a-zA-Z]{0,3}$/),
        activo: Joi.string().regex(/(V|F)/),
    });

    public esquemaEstudiante = Joi.object().keys({
        idestudiante: Joi.number().integer().min(1).max(1000),
        ci: Joi.string().regex(/^[0-9]{1,10}$/),
        nombres: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        apellidos: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        mail: Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        carrera: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        /*Una implementación del Estandard Official: RFC 5322 */
        /*/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ */
        /*RegEx email según w3.org */
        usuario: Joi.number().integer().min(1).max(1000),
        ifacultad: Joi.number().integer().min(1).max(1000),
    });

    public esquemaProfesor = Joi.object().keys({
        idprofesor: Joi.number().integer().min(1).max(1000),
        ci: Joi.string().regex(/^[0-9]{1,10}$/),
        nombres: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        apellidos: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
          /*RegEx email según w3.org */
          mail: Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
          /*Una implementación del Estandard Official: RFC 5322 */
          /*/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]
            *[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ */
        facultad: Joi.number().integer().min(1).max(1000),
        usuario: Joi.number().integer().min(1).max(1000),
    });

    public esquemaFacultad = Joi.object().keys({
        idfacultad: Joi.number().integer().min(1).max(1000),
        facultad: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
    });

    public esquemaObjetos = Joi.object().keys({
        idoa: Joi.number().integer().min(1).max(1000),
        nombre: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        descripcion: Joi.string().regex(/^[a-zA-Z]{1,500}$/),
        fechacreacion: Joi.string().regex(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/),
        palabrasClave: Joi.string().regex(/^[a-zA-Z]{1,500}$/),
        tamanio: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        ruta: Joi.string().regex(/^[a-zA-Z]{1,45}$/),
        usuario: Joi.number().integer().min(1).max(1000),
        /*Fecha dd-mm-aaaa */

    });

}
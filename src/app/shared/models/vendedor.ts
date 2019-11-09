import { Telefono } from './telefono';

export interface Vendedor {
    id?: Number,
    nombre: String,
    apellido: String,
    fechaNacimiento: String,
    direccion: String,
    contrasena?: String,
    confirmarContrasena?: String;
    estado: String,
    telefonos?: Telefono[]
}

import { Producto } from './producto';

export interface DetallePedido {
    id?: Number,
    cantidad: any,
    idPedido?: Number,
    idProducto: Number,
    producto?: Producto
}

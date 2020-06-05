import { DetallePedido } from './detalle-pedido';

export interface Pedido {
    id?: Number,
    nombre: String,
    montoTotal: Number,
    fechaEntrega: String,
    idVendedor?: any,
    detalles?: DetallePedido[ ]
}

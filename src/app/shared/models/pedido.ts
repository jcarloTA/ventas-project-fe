import { DetallePedido } from './detalle-pedido';

export interface Pedido {
    id?: Number,
    nombre: String,
    montoTotal: String,
    fechaEntrega: String,
    idVendedor: Number,
    detalles: DetallePedido[ ]
}

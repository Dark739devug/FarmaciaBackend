import { Venta } from '../../ventas/domain/venta.entity';
import { MetodoPago } from '../../metodos-pago/domain/metodo-pago.entity';
export declare class DetalleMetodoPago {
    id_detalle_metodos_pago: number;
    id_venta: number;
    id_metodo_pago: number;
    cantidad_detalle_metodos_pago?: number;
    estado_detalle_metodos_pago?: boolean;
    venta?: Venta;
    metodoPago?: MetodoPago;
    created_at: Date;
    updated_at: Date;
}

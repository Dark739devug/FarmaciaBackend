import { Venta } from '../../ventas/domain/venta.entity';
import { Medicamento } from '../../medicamentos/domain/medicamento.entity';
import { Lote } from '../../lotes/domain/lote.entity';
export declare class DetalleVenta {
    id_detalle_venta: number;
    id_venta: number;
    id_medicamento: number;
    id_lote?: number;
    cantidad_detalle_venta: number;
    subtotal_detalle_venta?: number;
    estado_detalle_venta?: boolean;
    venta?: Venta;
    medicamento?: Medicamento;
    lote?: Lote;
    created_at: Date;
    updated_at: Date;
}

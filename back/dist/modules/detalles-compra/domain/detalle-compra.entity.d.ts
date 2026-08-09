import { Compra } from '../../compras/domain/compra.entity';
import { Proveedor } from '../../proveedores/domain/proveedor.entity';
import { Medicamento } from '../../medicamentos/domain/medicamento.entity';
import { Lote } from '../../lotes/domain/lote.entity';
export declare class DetalleCompra {
    id_detalle_compra: number;
    id_compra: number;
    id_proveedor: number;
    id_medicamento: number;
    id_lote?: number;
    cantidad_compra: number;
    subtotal_compra?: number;
    estado_compra?: boolean;
    compra?: Compra;
    proveedor?: Proveedor;
    medicamento?: Medicamento;
    lote?: Lote;
    created_at: Date;
    updated_at: Date;
}

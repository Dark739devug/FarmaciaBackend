export declare class CreateDetalleCompraDto {
    id_compra: number;
    id_proveedor: number;
    id_medicamento: number;
    id_lote?: number;
    cantidad_compra: number;
    subtotal_compra?: number;
    estado_compra?: boolean;
}

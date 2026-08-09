export declare class CreateMedicamentoDto {
    id_presentacion: number;
    codigo_barras_medicamento?: string;
    nombre_medicamento: string;
    cantidad_por_paquete?: number;
    precio_mayorista?: number;
    precio_minimo?: number;
    precio_venta?: number;
    componente_activo?: string;
    estado_medicamento?: boolean;
    venta_libre?: boolean;
    existencia_total_medicamento?: number;
}

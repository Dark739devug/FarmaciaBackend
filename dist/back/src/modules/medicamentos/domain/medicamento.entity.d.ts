import { Presentacion } from '../../presentaciones/domain/presentacion.entity';
export declare class Medicamento {
    id_medicamento: number;
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
    presentacion?: Presentacion;
    created_at: Date;
    updated_at: Date;
}

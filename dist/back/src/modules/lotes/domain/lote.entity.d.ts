import { Medicamento } from '../../medicamentos/domain/medicamento.entity';
export declare class Lote {
    id_lote: number;
    id_medicamento: number;
    fecha_vencimiento: string;
    fecha_produccion?: string;
    precio_lote?: number;
    estado_lote?: boolean;
    existencia_lote?: number;
    medicamento?: Medicamento;
    created_at: Date;
    updated_at: Date;
}

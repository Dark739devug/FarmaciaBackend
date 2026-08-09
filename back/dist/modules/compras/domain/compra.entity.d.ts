import { Proveedor } from '../../proveedores/domain/proveedor.entity';
export declare class Compra {
    id_compra: number;
    id_proveedor: number;
    fecha_compra?: string;
    total_compra?: number;
    estado_compra?: boolean;
    proveedor?: Proveedor;
    created_at: Date;
    updated_at: Date;
}

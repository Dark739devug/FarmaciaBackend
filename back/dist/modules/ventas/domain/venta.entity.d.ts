import { Usuario } from '../../usuarios/domain/usuario.entity';
import { Cliente } from '../../clientes/domain/cliente.entity';
export declare class Venta {
    id_venta: number;
    id_usuario: number;
    id_cliente: number;
    fecha_venta?: Date;
    estado_venta?: boolean;
    total_venta?: number;
    usuario?: Usuario;
    cliente?: Cliente;
    created_at: Date;
    updated_at: Date;
}

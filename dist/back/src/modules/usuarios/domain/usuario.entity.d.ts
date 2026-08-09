import { Rol } from '../../roles/domain/rol.entity';
export declare class Usuario {
    id_usuario: number;
    usuario: string;
    password: string;
    nombre_usuario: string;
    telefono_usuario?: string;
    correo_usuario?: string;
    dpi_usuario?: string;
    estado_usuario?: boolean;
    id_rol: number;
    rol?: Rol;
    created_at: Date;
    updated_at: Date;
}

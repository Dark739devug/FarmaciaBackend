import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { RolService } from '../application/rol.service';
import { CreateRolDto } from '../application/dto/create-rol.dto';
import { UpdateRolDto } from '../application/dto/update-rol.dto';
export declare class RolController {
    private readonly rolService;
    constructor(rolService: RolService);
    crear(createDto: CreateRolDto): Promise<import("../domain/rol.entity").Rol>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/rol.entity").Rol>>;
    buscarPorId(id: number): Promise<import("../domain/rol.entity").Rol>;
    actualizar(id: number, updateDto: UpdateRolDto): Promise<import("../domain/rol.entity").Rol>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

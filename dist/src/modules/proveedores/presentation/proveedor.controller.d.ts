import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { ProveedorService } from '../application/proveedor.service';
import { CreateProveedorDto } from '../application/dto/create-proveedor.dto';
import { UpdateProveedorDto } from '../application/dto/update-proveedor.dto';
export declare class ProveedorController {
    private readonly proveedorService;
    constructor(proveedorService: ProveedorService);
    crear(createDto: CreateProveedorDto): Promise<import("../domain/proveedor.entity").Proveedor>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/proveedor.entity").Proveedor>>;
    buscarPorId(id: number): Promise<import("../domain/proveedor.entity").Proveedor>;
    actualizar(id: number, updateDto: UpdateProveedorDto): Promise<import("../domain/proveedor.entity").Proveedor>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

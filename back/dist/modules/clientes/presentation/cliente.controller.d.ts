import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { ClienteService } from '../application/cliente.service';
import { CreateClienteDto } from '../application/dto/create-cliente.dto';
import { UpdateClienteDto } from '../application/dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    crear(createDto: CreateClienteDto): Promise<import("../domain/cliente.entity").Cliente>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/cliente.entity").Cliente>>;
    buscarPorId(id: number): Promise<import("../domain/cliente.entity").Cliente>;
    actualizar(id: number, updateDto: UpdateClienteDto): Promise<import("../domain/cliente.entity").Cliente>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

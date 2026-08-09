import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { UsuarioService } from '../application/usuario.service';
import { CreateUsuarioDto } from '../application/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../application/dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    crear(createDto: CreateUsuarioDto): Promise<import("../domain/usuario.entity").Usuario>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/usuario.entity").Usuario>>;
    buscarPorId(id: number): Promise<import("../domain/usuario.entity").Usuario>;
    actualizar(id: number, updateDto: UpdateUsuarioDto): Promise<import("../domain/usuario.entity").Usuario>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

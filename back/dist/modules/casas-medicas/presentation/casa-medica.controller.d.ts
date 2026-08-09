import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { CasaMedicaService } from '../application/casa-medica.service';
import { CreateCasaMedicaDto } from '../application/dto/create-casa-medica.dto';
import { UpdateCasaMedicaDto } from '../application/dto/update-casa-medica.dto';
export declare class CasaMedicaController {
    private readonly casaMedicaService;
    constructor(casaMedicaService: CasaMedicaService);
    crear(createDto: CreateCasaMedicaDto): Promise<import("../domain/casa-medica.entity").CasaMedica>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/casa-medica.entity").CasaMedica>>;
    buscarPorId(id: number): Promise<import("../domain/casa-medica.entity").CasaMedica>;
    actualizar(id: number, updateDto: UpdateCasaMedicaDto): Promise<import("../domain/casa-medica.entity").CasaMedica>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

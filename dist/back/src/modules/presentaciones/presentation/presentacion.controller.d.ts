import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { PresentacionService } from '../application/presentacion.service';
import { CreatePresentacionDto } from '../application/dto/create-presentacion.dto';
import { UpdatePresentacionDto } from '../application/dto/update-presentacion.dto';
export declare class PresentacionController {
    private readonly presentacionService;
    constructor(presentacionService: PresentacionService);
    crear(createDto: CreatePresentacionDto): Promise<import("../domain/presentacion.entity").Presentacion>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/presentacion.entity").Presentacion>>;
    buscarPorId(id: number): Promise<import("../domain/presentacion.entity").Presentacion>;
    actualizar(id: number, updateDto: UpdatePresentacionDto): Promise<import("../domain/presentacion.entity").Presentacion>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

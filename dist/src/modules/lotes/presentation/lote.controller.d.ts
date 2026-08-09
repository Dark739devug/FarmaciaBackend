import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { LoteService } from '../application/lote.service';
import { CreateLoteDto } from '../application/dto/create-lote.dto';
import { UpdateLoteDto } from '../application/dto/update-lote.dto';
export declare class LoteController {
    private readonly loteService;
    constructor(loteService: LoteService);
    crear(createDto: CreateLoteDto): Promise<import("../domain/lote.entity").Lote>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/lote.entity").Lote>>;
    buscarPorId(id: number): Promise<import("../domain/lote.entity").Lote>;
    actualizar(id: number, updateDto: UpdateLoteDto): Promise<import("../domain/lote.entity").Lote>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

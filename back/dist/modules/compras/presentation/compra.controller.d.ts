import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { CompraService } from '../application/compra.service';
import { CreateCompraDto } from '../application/dto/create-compra.dto';
import { UpdateCompraDto } from '../application/dto/update-compra.dto';
export declare class CompraController {
    private readonly compraService;
    constructor(compraService: CompraService);
    crear(createDto: CreateCompraDto): Promise<import("../domain/compra.entity").Compra>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/compra.entity").Compra>>;
    buscarPorId(id: number): Promise<import("../domain/compra.entity").Compra>;
    actualizar(id: number, updateDto: UpdateCompraDto): Promise<import("../domain/compra.entity").Compra>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

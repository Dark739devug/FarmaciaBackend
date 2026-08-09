import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { DetalleCompraService } from '../application/detalle-compra.service';
import { CreateDetalleCompraDto } from '../application/dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from '../application/dto/update-detalle-compra.dto';
export declare class DetalleCompraController {
    private readonly detalleCompraService;
    constructor(detalleCompraService: DetalleCompraService);
    crear(createDto: CreateDetalleCompraDto): Promise<import("../domain/detalle-compra.entity").DetalleCompra>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/detalle-compra.entity").DetalleCompra>>;
    buscarPorId(id: number): Promise<import("../domain/detalle-compra.entity").DetalleCompra>;
    actualizar(id: number, updateDto: UpdateDetalleCompraDto): Promise<import("../domain/detalle-compra.entity").DetalleCompra>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

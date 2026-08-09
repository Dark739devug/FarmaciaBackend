import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { DetalleVentaService } from '../application/detalle-venta.service';
import { CreateDetalleVentaDto } from '../application/dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from '../application/dto/update-detalle-venta.dto';
export declare class DetalleVentaController {
    private readonly detalleVentaService;
    constructor(detalleVentaService: DetalleVentaService);
    crear(createDto: CreateDetalleVentaDto): Promise<import("../domain/detalle-venta.entity").DetalleVenta>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/detalle-venta.entity").DetalleVenta>>;
    buscarPorId(id: number): Promise<import("../domain/detalle-venta.entity").DetalleVenta>;
    actualizar(id: number, updateDto: UpdateDetalleVentaDto): Promise<import("../domain/detalle-venta.entity").DetalleVenta>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

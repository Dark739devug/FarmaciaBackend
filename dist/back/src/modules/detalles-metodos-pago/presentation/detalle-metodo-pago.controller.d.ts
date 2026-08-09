import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { DetalleMetodoPagoService } from '../application/detalle-metodo-pago.service';
import { CreateDetalleMetodoPagoDto } from '../application/dto/create-detalle-metodo-pago.dto';
import { UpdateDetalleMetodoPagoDto } from '../application/dto/update-detalle-metodo-pago.dto';
export declare class DetalleMetodoPagoController {
    private readonly detalleMetodoPagoService;
    constructor(detalleMetodoPagoService: DetalleMetodoPagoService);
    crear(createDto: CreateDetalleMetodoPagoDto): Promise<import("../domain/detalle-metodo-pago.entity").DetalleMetodoPago>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/detalle-metodo-pago.entity").DetalleMetodoPago>>;
    buscarPorId(id: number): Promise<import("../domain/detalle-metodo-pago.entity").DetalleMetodoPago>;
    actualizar(id: number, updateDto: UpdateDetalleMetodoPagoDto): Promise<import("../domain/detalle-metodo-pago.entity").DetalleMetodoPago>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

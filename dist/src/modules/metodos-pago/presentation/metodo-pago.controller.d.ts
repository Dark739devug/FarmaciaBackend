import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { MetodoPagoService } from '../application/metodo-pago.service';
import { CreateMetodoPagoDto } from '../application/dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from '../application/dto/update-metodo-pago.dto';
export declare class MetodoPagoController {
    private readonly metodoPagoService;
    constructor(metodoPagoService: MetodoPagoService);
    crear(createDto: CreateMetodoPagoDto): Promise<import("../domain/metodo-pago.entity").MetodoPago>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/metodo-pago.entity").MetodoPago>>;
    buscarPorId(id: number): Promise<import("../domain/metodo-pago.entity").MetodoPago>;
    actualizar(id: number, updateDto: UpdateMetodoPagoDto): Promise<import("../domain/metodo-pago.entity").MetodoPago>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

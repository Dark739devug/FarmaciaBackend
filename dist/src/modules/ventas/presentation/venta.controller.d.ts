import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { VentaService } from '../application/venta.service';
import { CreateVentaDto } from '../application/dto/create-venta.dto';
import { UpdateVentaDto } from '../application/dto/update-venta.dto';
export declare class VentaController {
    private readonly ventaService;
    constructor(ventaService: VentaService);
    crear(createDto: CreateVentaDto): Promise<import("../domain/venta.entity").Venta>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/venta.entity").Venta>>;
    buscarPorId(id: number): Promise<import("../domain/venta.entity").Venta>;
    actualizar(id: number, updateDto: UpdateVentaDto): Promise<import("../domain/venta.entity").Venta>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}

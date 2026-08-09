import { BaseService } from '../../../common/base/base.service';
import { ClienteService } from '../../clientes/application/cliente.service';
import { Venta } from '../domain/venta.entity';
import { VentaRepository } from '../infrastructure/venta.repository';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
export declare class VentaService extends BaseService<Venta, CreateVentaDto, UpdateVentaDto> {
    private readonly ventaRepository;
    private readonly clienteService;
    constructor(ventaRepository: VentaRepository, clienteService: ClienteService);
    crear(crearDto: CreateVentaDto): Promise<Venta>;
}

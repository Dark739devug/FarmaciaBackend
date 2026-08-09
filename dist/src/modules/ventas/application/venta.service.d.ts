import { Repository } from 'typeorm';
import { BaseService } from '../../../common/base/base.service';
import { ClienteService } from '../../clientes/application/cliente.service';
import { Venta } from '../domain/venta.entity';
import { VentaRepository } from '../infrastructure/venta.repository';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { LogsVenta } from '../domain/logs-venta.entity';
export declare class VentaService extends BaseService<Venta, CreateVentaDto, UpdateVentaDto> {
    private readonly ventaRepository;
    private readonly clienteService;
    private readonly logRepository;
    constructor(ventaRepository: VentaRepository, clienteService: ClienteService, logRepository: Repository<LogsVenta>);
    crear(crearDto: CreateVentaDto): Promise<Venta>;
    actualizar(id: number, updateDto: UpdateVentaDto): Promise<Venta>;
    eliminar(id: number): Promise<void>;
}

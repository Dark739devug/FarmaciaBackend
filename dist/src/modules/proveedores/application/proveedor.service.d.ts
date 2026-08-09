import { BaseService } from '../../../common/base/base.service';
import { Proveedor } from '../domain/proveedor.entity';
import { ProveedorRepository } from '../infrastructure/proveedor.repository';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { Repository } from 'typeorm';
import { LogsProveedor } from '../domain/logs-proveedor.entity';
export declare class ProveedorService extends BaseService<Proveedor, CreateProveedorDto, UpdateProveedorDto> {
    private readonly proveedorRepository;
    private readonly logRepository;
    constructor(proveedorRepository: ProveedorRepository, logRepository: Repository<LogsProveedor>);
    crear(crearDto: CreateProveedorDto): Promise<Proveedor>;
    actualizar(id: number, updateDto: UpdateProveedorDto): Promise<Proveedor>;
}

import { BaseService } from '../../../common/base/base.service';
import { Proveedor } from '../domain/proveedor.entity';
import { ProveedorRepository } from '../infrastructure/proveedor.repository';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
export declare class ProveedorService extends BaseService<Proveedor, CreateProveedorDto, UpdateProveedorDto> {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepository);
}

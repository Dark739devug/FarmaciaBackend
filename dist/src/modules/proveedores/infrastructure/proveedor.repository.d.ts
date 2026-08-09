import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Proveedor } from '../domain/proveedor.entity';
export declare class ProveedorRepository extends BaseRepository<Proveedor> {
    constructor(repositorio: Repository<Proveedor>);
}

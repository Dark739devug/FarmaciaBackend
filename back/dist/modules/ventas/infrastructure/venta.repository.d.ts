import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Venta } from '../domain/venta.entity';
export declare class VentaRepository extends BaseRepository<Venta> {
    constructor(repositorio: Repository<Venta>);
}

import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleVenta } from '../domain/detalle-venta.entity';
export declare class DetalleVentaRepository extends BaseRepository<DetalleVenta> {
    constructor(repositorio: Repository<DetalleVenta>);
}

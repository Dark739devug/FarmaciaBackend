import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleCompra } from '../domain/detalle-compra.entity';
export declare class DetalleCompraRepository extends BaseRepository<DetalleCompra> {
    constructor(repositorio: Repository<DetalleCompra>);
}

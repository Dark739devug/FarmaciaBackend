import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleMetodoPago } from '../domain/detalle-metodo-pago.entity';
export declare class DetalleMetodoPagoRepository extends BaseRepository<DetalleMetodoPago> {
    constructor(repositorio: Repository<DetalleMetodoPago>);
}

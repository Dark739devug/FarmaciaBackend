import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { MetodoPago } from '../domain/metodo-pago.entity';
export declare class MetodoPagoRepository extends BaseRepository<MetodoPago> {
    constructor(repositorio: Repository<MetodoPago>);
}

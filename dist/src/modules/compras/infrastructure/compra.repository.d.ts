import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Compra } from '../domain/compra.entity';
export declare class CompraRepository extends BaseRepository<Compra> {
    constructor(repositorio: Repository<Compra>);
}

import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Lote } from '../domain/lote.entity';
export declare class LoteRepository extends BaseRepository<Lote> {
    constructor(repositorio: Repository<Lote>);
}

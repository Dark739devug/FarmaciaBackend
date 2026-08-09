import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Presentacion } from '../domain/presentacion.entity';
export declare class PresentacionRepository extends BaseRepository<Presentacion> {
    constructor(repositorio: Repository<Presentacion>);
}

import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { CasaMedica } from '../domain/casa-medica.entity';
export declare class CasaMedicaRepository extends BaseRepository<CasaMedica> {
    constructor(repositorio: Repository<CasaMedica>);
}

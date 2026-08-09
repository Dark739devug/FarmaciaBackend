import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Medicamento } from '../domain/medicamento.entity';
export declare class MedicamentoRepository extends BaseRepository<Medicamento> {
    constructor(repositorio: Repository<Medicamento>);
}

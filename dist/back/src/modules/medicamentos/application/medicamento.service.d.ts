import { BaseService } from '../../../common/base/base.service';
import { Medicamento } from '../domain/medicamento.entity';
import { MedicamentoRepository } from '../infrastructure/medicamento.repository';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
export declare class MedicamentoService extends BaseService<Medicamento, CreateMedicamentoDto, UpdateMedicamentoDto> {
    private readonly medicamentoRepository;
    constructor(medicamentoRepository: MedicamentoRepository);
}

import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Medicamento } from '../domain/medicamento.entity';
import { MedicamentoRepository } from '../infrastructure/medicamento.repository';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';

@Injectable()
export class MedicamentoService extends BaseService<
  Medicamento,
  CreateMedicamentoDto,
  UpdateMedicamentoDto
> {
  constructor(private readonly medicamentoRepository: MedicamentoRepository) {
    super(medicamentoRepository, 'Medicamento');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Medicamento } from '../domain/medicamento.entity';

@Injectable()
export class MedicamentoRepository extends BaseRepository<Medicamento> {
  constructor(
    @InjectRepository(Medicamento)
    repositorio: Repository<Medicamento>,
  ) {
    super(repositorio, 'id_medicamento');
  }
}

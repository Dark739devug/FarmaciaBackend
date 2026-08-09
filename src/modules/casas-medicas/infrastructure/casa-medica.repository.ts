import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { CasaMedica } from '../domain/casa-medica.entity';

@Injectable()
export class CasaMedicaRepository extends BaseRepository<CasaMedica> {
  constructor(
    @InjectRepository(CasaMedica)
    repositorio: Repository<CasaMedica>,
  ) {
    super(repositorio, 'id_casa_medica');
  }
}

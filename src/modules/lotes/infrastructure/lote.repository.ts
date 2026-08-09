import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Lote } from '../domain/lote.entity';

@Injectable()
export class LoteRepository extends BaseRepository<Lote> {
  constructor(
    @InjectRepository(Lote)
    repositorio: Repository<Lote>,
  ) {
    super(repositorio, 'id_lote');
  }
}

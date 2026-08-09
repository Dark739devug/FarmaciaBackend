import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Compra } from '../domain/compra.entity';

@Injectable()
export class CompraRepository extends BaseRepository<Compra> {
  constructor(
    @InjectRepository(Compra)
    repositorio: Repository<Compra>,
  ) {
    super(repositorio, 'id_compra');
  }
}

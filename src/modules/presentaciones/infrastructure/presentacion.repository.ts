import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Presentacion } from '../domain/presentacion.entity';

@Injectable()
export class PresentacionRepository extends BaseRepository<Presentacion> {
  constructor(
    @InjectRepository(Presentacion)
    repositorio: Repository<Presentacion>,
  ) {
    super(repositorio, 'id_presentacion');
  }
}

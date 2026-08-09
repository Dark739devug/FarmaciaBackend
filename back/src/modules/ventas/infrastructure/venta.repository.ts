import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Venta } from '../domain/venta.entity';

@Injectable()
export class VentaRepository extends BaseRepository<Venta> {
  constructor(
    @InjectRepository(Venta)
    repositorio: Repository<Venta>,
  ) {
    super(repositorio, 'id_venta');
  }
}

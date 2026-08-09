import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { MetodoPago } from '../domain/metodo-pago.entity';

@Injectable()
export class MetodoPagoRepository extends BaseRepository<MetodoPago> {
  constructor(
    @InjectRepository(MetodoPago)
    repositorio: Repository<MetodoPago>,
  ) {
    super(repositorio, 'id_metodo_pago');
  }
}

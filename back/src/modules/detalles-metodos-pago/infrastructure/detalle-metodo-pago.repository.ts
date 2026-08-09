import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleMetodoPago } from '../domain/detalle-metodo-pago.entity';

@Injectable()
export class DetalleMetodoPagoRepository extends BaseRepository<DetalleMetodoPago> {
  constructor(
    @InjectRepository(DetalleMetodoPago)
    repositorio: Repository<DetalleMetodoPago>,
  ) {
    super(repositorio, 'id_detalle_metodos_pago');
  }
}

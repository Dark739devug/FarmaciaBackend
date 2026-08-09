import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleVenta } from '../domain/detalle-venta.entity';

@Injectable()
export class DetalleVentaRepository extends BaseRepository<DetalleVenta> {
  constructor(
    @InjectRepository(DetalleVenta)
    repositorio: Repository<DetalleVenta>,
  ) {
    super(repositorio, 'id_detalle_venta');
  }
}

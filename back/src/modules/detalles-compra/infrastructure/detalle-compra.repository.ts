import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { DetalleCompra } from '../domain/detalle-compra.entity';

@Injectable()
export class DetalleCompraRepository extends BaseRepository<DetalleCompra> {
  constructor(
    @InjectRepository(DetalleCompra)
    repositorio: Repository<DetalleCompra>,
  ) {
    super(repositorio, 'id_detalle_compra');
  }
}

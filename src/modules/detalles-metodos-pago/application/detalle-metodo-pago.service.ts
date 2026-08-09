import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { DetalleMetodoPago } from '../domain/detalle-metodo-pago.entity';
import { DetalleMetodoPagoRepository } from '../infrastructure/detalle-metodo-pago.repository';
import { CreateDetalleMetodoPagoDto } from './dto/create-detalle-metodo-pago.dto';
import { UpdateDetalleMetodoPagoDto } from './dto/update-detalle-metodo-pago.dto';

@Injectable()
export class DetalleMetodoPagoService extends BaseService<
  DetalleMetodoPago,
  CreateDetalleMetodoPagoDto,
  UpdateDetalleMetodoPagoDto
> {
  constructor(private readonly detalleMetodoPagoRepository: DetalleMetodoPagoRepository) {
    super(detalleMetodoPagoRepository, 'DetalleMetodoPago');
  }
}

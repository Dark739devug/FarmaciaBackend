import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { MetodoPago } from '../domain/metodo-pago.entity';
import { MetodoPagoRepository } from '../infrastructure/metodo-pago.repository';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';

@Injectable()
export class MetodoPagoService extends BaseService<
  MetodoPago,
  CreateMetodoPagoDto,
  UpdateMetodoPagoDto
> {
  constructor(private readonly metodoPagoRepository: MetodoPagoRepository) {
    super(metodoPagoRepository, 'MetodoPago');
  }
}

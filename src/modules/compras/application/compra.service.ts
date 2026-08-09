import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Compra } from '../domain/compra.entity';
import { CompraRepository } from '../infrastructure/compra.repository';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Injectable()
export class CompraService extends BaseService<
  Compra,
  CreateCompraDto,
  UpdateCompraDto
> {
  constructor(private readonly compraRepository: CompraRepository) {
    super(compraRepository, 'Compra');
  }
}

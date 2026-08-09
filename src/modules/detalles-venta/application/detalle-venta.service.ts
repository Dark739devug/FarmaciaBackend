import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { DetalleVenta } from '../domain/detalle-venta.entity';
import { DetalleVentaRepository } from '../infrastructure/detalle-venta.repository';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';

@Injectable()
export class DetalleVentaService extends BaseService<
  DetalleVenta,
  CreateDetalleVentaDto,
  UpdateDetalleVentaDto
> {
  constructor(private readonly detalleVentaRepository: DetalleVentaRepository) {
    super(detalleVentaRepository, 'DetalleVenta');
  }
}

import { PartialType } from '@nestjs/mapped-types';

import { CreateDetalleMetodoPagoDto } from './create-detalle-metodo-pago.dto';

export class UpdateDetalleMetodoPagoDto extends PartialType(CreateDetalleMetodoPagoDto) {}

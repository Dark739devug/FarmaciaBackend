import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DetalleMetodoPagoService } from './application/detalle-metodo-pago.service';
import { DetalleMetodoPago } from './domain/detalle-metodo-pago.entity';
import { DetalleMetodoPagoRepository } from './infrastructure/detalle-metodo-pago.repository';
import { DetalleMetodoPagoController } from './presentation/detalle-metodo-pago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleMetodoPago])],
  controllers: [DetalleMetodoPagoController],
  providers: [DetalleMetodoPagoService, DetalleMetodoPagoRepository],
  exports: [DetalleMetodoPagoService, DetalleMetodoPagoRepository],
})
export class DetallesMetodosPagoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MetodoPagoService } from './application/metodo-pago.service';
import { MetodoPago } from './domain/metodo-pago.entity';
import { MetodoPagoRepository } from './infrastructure/metodo-pago.repository';
import { MetodoPagoController } from './presentation/metodo-pago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPago])],
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService, MetodoPagoRepository],
  exports: [MetodoPagoService, MetodoPagoRepository],
})
export class MetodosPagoModule {}

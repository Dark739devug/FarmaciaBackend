import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DetalleVentaService } from './application/detalle-venta.service';
import { DetalleVenta } from './domain/detalle-venta.entity';
import { DetalleVentaRepository } from './infrastructure/detalle-venta.repository';
import { DetalleVentaController } from './presentation/detalle-venta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVenta])],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService, DetalleVentaRepository],
  exports: [DetalleVentaService, DetalleVentaRepository],
})
export class DetallesVentaModule {}

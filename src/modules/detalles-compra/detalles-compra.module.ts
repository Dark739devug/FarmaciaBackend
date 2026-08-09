import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DetalleCompraService } from './application/detalle-compra.service';
import { DetalleCompra } from './domain/detalle-compra.entity';
import { DetalleCompraRepository } from './infrastructure/detalle-compra.repository';
import { DetalleCompraController } from './presentation/detalle-compra.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleCompra])],
  controllers: [DetalleCompraController],
  providers: [DetalleCompraService, DetalleCompraRepository],
  exports: [DetalleCompraService, DetalleCompraRepository],
})
export class DetallesCompraModule {}

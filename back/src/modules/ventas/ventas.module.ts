import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientesModule } from '../clientes/clientes.module';
import { VentaService } from './application/venta.service';
import { Venta } from './domain/venta.entity';
import { VentaRepository } from './infrastructure/venta.repository';
import { VentaController } from './presentation/venta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Venta]), ClientesModule],
  controllers: [VentaController],
  providers: [VentaService, VentaRepository],
  exports: [VentaService, VentaRepository],
})
export class VentasModule {}


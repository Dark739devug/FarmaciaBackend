import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicamentoService } from './application/medicamento.service';
import { Medicamento } from './domain/medicamento.entity';
import { MedicamentoRepository } from './infrastructure/medicamento.repository';
import { MedicamentoController } from './presentation/medicamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Medicamento])],
  controllers: [MedicamentoController],
  providers: [MedicamentoService, MedicamentoRepository],
  exports: [MedicamentoService, MedicamentoRepository],
})
export class MedicamentosModule {}

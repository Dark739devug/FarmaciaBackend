import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompraService } from './application/compra.service';
import { Compra } from './domain/compra.entity';
import { CompraRepository } from './infrastructure/compra.repository';
import { CompraController } from './presentation/compra.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Compra])],
  controllers: [CompraController],
  providers: [CompraService, CompraRepository],
  exports: [CompraService, CompraRepository],
})
export class ComprasModule {}

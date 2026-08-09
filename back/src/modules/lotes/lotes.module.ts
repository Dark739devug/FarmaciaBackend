import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoteService } from './application/lote.service';
import { Lote } from './domain/lote.entity';
import { LoteRepository } from './infrastructure/lote.repository';
import { LoteController } from './presentation/lote.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lote])],
  controllers: [LoteController],
  providers: [LoteService, LoteRepository],
  exports: [LoteService, LoteRepository],
})
export class LotesModule {}

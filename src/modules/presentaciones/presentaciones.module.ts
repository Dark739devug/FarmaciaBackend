import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PresentacionService } from './application/presentacion.service';
import { Presentacion } from './domain/presentacion.entity';
import { PresentacionRepository } from './infrastructure/presentacion.repository';
import { PresentacionController } from './presentation/presentacion.controller';
import { LogsPresentacion } from './domain/logs-presentacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presentacion, LogsPresentacion])],
  controllers: [PresentacionController],
  providers: [PresentacionService, PresentacionRepository],
  exports: [PresentacionService, PresentacionRepository],
})
export class PresentacionesModule {}





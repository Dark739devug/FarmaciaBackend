import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CasaMedicaService } from './application/casa-medica.service';
import { CasaMedica } from './domain/casa-medica.entity';
import { CasaMedicaRepository } from './infrastructure/casa-medica.repository';
import { CasaMedicaController } from './presentation/casa-medica.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CasaMedica])],
  controllers: [CasaMedicaController],
  providers: [CasaMedicaService, CasaMedicaRepository],
  exports: [CasaMedicaService, CasaMedicaRepository],
})
export class CasasMedicasModule {}

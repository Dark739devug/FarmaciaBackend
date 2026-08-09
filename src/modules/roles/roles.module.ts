import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolService } from './application/rol.service';
import { Rol } from './domain/rol.entity';
import { RolRepository } from './infrastructure/rol.repository';
import { RolController } from './presentation/rol.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  controllers: [RolController],
  providers: [RolService, RolRepository],
  exports: [RolService, RolRepository],
})
export class RolesModule {}

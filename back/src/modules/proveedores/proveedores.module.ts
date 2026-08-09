import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProveedorService } from './application/proveedor.service';
import { Proveedor } from './domain/proveedor.entity';
import { ProveedorRepository } from './infrastructure/proveedor.repository';
import { ProveedorController } from './presentation/proveedor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  controllers: [ProveedorController],
  providers: [ProveedorService, ProveedorRepository],
  exports: [ProveedorService, ProveedorRepository],
})
export class ProveedoresModule {}

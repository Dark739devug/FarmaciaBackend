import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteService } from './application/cliente.service';
import { Cliente } from './domain/cliente.entity';
import { ClienteRepository } from './infrastructure/cliente.repository';
import { ClienteController } from './presentation/cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
  exports: [ClienteService, ClienteRepository],
})
export class ClientesModule {}

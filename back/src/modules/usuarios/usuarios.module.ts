import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioService } from './application/usuario.service';
import { Usuario } from './domain/usuario.entity';
import { UsuarioRepository } from './infrastructure/usuario.repository';
import { UsuarioController } from './presentation/usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository],
  exports: [UsuarioService, UsuarioRepository],
})
export class UsuariosModule {}

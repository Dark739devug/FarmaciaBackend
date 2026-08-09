

import { BaseService } from '../../../common/base/base.service';
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';


import { Usuario } from '../domain/usuario.entity';
import { UsuarioRepository } from '../infrastructure/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService extends BaseService<
  Usuario,
  CreateUsuarioDto,
  UpdateUsuarioDto
> {
  constructor(private readonly usuarioRepository: UsuarioRepository) {
    super(usuarioRepository, 'Usuario');
  }

  async actualizar(
    id: number,
    actualizarDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuarioActualizado = await this.usuarioRepository.actualizar(
      id,
      actualizarDto,
    );

    if (!usuarioActualizado) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return usuarioActualizado;
  }
}
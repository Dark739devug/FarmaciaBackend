import { BaseService } from '../../../common/base/base.service';
import { Usuario } from '../domain/usuario.entity';
import { UsuarioRepository } from '../infrastructure/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService extends BaseService<Usuario, CreateUsuarioDto, UpdateUsuarioDto> {
    private readonly usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    actualizar(id: number, actualizarDto: UpdateUsuarioDto): Promise<Usuario>;
}

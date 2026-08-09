import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Usuario } from '../domain/usuario.entity';
export declare class UsuarioRepository extends BaseRepository<Usuario> {
    constructor(repositorio: Repository<Usuario>);
    listar(pagina: number, limite: number): Promise<[Usuario[], number]>;
}

import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Cliente } from '../domain/cliente.entity';
export declare class ClienteRepository extends BaseRepository<Cliente> {
    constructor(repositorio: Repository<Cliente>);
    buscarPorNit(nit: string): Promise<Cliente | null>;
}

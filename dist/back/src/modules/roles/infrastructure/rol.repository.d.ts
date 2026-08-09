import { Repository } from 'typeorm';
import { BaseRepository } from '../../../common/base/base.repository';
import { Rol } from '../domain/rol.entity';
export declare class RolRepository extends BaseRepository<Rol> {
    constructor(repositorio: Repository<Rol>);
}

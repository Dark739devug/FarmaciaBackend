import { BaseService } from '../../../common/base/base.service';
import { Rol } from '../domain/rol.entity';
import { RolRepository } from '../infrastructure/rol.repository';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
export declare class RolService extends BaseService<Rol, CreateRolDto, UpdateRolDto> {
    private readonly rolRepository;
    constructor(rolRepository: RolRepository);
}

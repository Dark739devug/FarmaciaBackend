import { BaseService } from '../../../common/base/base.service';
import { Presentacion } from '../domain/presentacion.entity';
import { PresentacionRepository } from '../infrastructure/presentacion.repository';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';
import { Repository } from 'typeorm';
import { LogsPresentacion } from '../domain/logs-presentacion.entity';
export declare class PresentacionService extends BaseService<Presentacion, CreatePresentacionDto, UpdatePresentacionDto> {
    private readonly presentacionRepository;
    private readonly logRepository;
    constructor(presentacionRepository: PresentacionRepository, logRepository: Repository<LogsPresentacion>);
    crear(crearDto: CreatePresentacionDto): Promise<Presentacion>;
}

import { BaseService } from '../../../common/base/base.service';
import { MetodoPago } from '../domain/metodo-pago.entity';
import { MetodoPagoRepository } from '../infrastructure/metodo-pago.repository';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';
export declare class MetodoPagoService extends BaseService<MetodoPago, CreateMetodoPagoDto, UpdateMetodoPagoDto> {
    private readonly metodoPagoRepository;
    constructor(metodoPagoRepository: MetodoPagoRepository);
}

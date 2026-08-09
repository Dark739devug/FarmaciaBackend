import { BaseService } from '../../../common/base/base.service';
import { DetalleMetodoPago } from '../domain/detalle-metodo-pago.entity';
import { DetalleMetodoPagoRepository } from '../infrastructure/detalle-metodo-pago.repository';
import { CreateDetalleMetodoPagoDto } from './dto/create-detalle-metodo-pago.dto';
import { UpdateDetalleMetodoPagoDto } from './dto/update-detalle-metodo-pago.dto';
export declare class DetalleMetodoPagoService extends BaseService<DetalleMetodoPago, CreateDetalleMetodoPagoDto, UpdateDetalleMetodoPagoDto> {
    private readonly detalleMetodoPagoRepository;
    constructor(detalleMetodoPagoRepository: DetalleMetodoPagoRepository);
}

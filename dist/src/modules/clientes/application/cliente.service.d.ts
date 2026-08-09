import { BaseService } from '../../../common/base/base.service';
import { Cliente } from '../domain/cliente.entity';
import { ClienteRepository } from '../infrastructure/cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteService extends BaseService<Cliente, CreateClienteDto, UpdateClienteDto> {
    private readonly clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    obtenerOCrearConsumidorFinal(): Promise<Cliente>;
    eliminar(id: number): Promise<void>;
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { ClienteService } from '../application/cliente.service';
import { CreateClienteDto } from '../application/dto/create-cliente.dto';
import { UpdateClienteDto } from '../application/dto/update-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  crear(@Body() createDto: CreateClienteDto) {
    return this.clienteService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.clienteService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateClienteDto,
  ) {
    return this.clienteService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.clienteService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

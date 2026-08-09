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
import { MetodoPagoService } from '../application/metodo-pago.service';
import { CreateMetodoPagoDto } from '../application/dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from '../application/dto/update-metodo-pago.dto';

@Controller('metodos-pago')
export class MetodoPagoController {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  @Post()
  crear(@Body() createDto: CreateMetodoPagoDto) {
    return this.metodoPagoService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.metodoPagoService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.metodoPagoService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateMetodoPagoDto,
  ) {
    return this.metodoPagoService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.metodoPagoService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

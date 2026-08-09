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
import { DetalleMetodoPagoService } from '../application/detalle-metodo-pago.service';
import { CreateDetalleMetodoPagoDto } from '../application/dto/create-detalle-metodo-pago.dto';
import { UpdateDetalleMetodoPagoDto } from '../application/dto/update-detalle-metodo-pago.dto';

@Controller('detalles-metodos-pago')
export class DetalleMetodoPagoController {
  constructor(private readonly detalleMetodoPagoService: DetalleMetodoPagoService) {}

  @Post()
  crear(@Body() createDto: CreateDetalleMetodoPagoDto) {
    return this.detalleMetodoPagoService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.detalleMetodoPagoService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.detalleMetodoPagoService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDetalleMetodoPagoDto,
  ) {
    return this.detalleMetodoPagoService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.detalleMetodoPagoService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

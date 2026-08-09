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
import { DetalleVentaService } from '../application/detalle-venta.service';
import { CreateDetalleVentaDto } from '../application/dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from '../application/dto/update-detalle-venta.dto';

@Controller('detalles-venta')
export class DetalleVentaController {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Post()
  crear(@Body() createDto: CreateDetalleVentaDto) {
    return this.detalleVentaService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.detalleVentaService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.detalleVentaService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDetalleVentaDto,
  ) {
    return this.detalleVentaService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.detalleVentaService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

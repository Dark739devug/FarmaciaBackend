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
import { VentaService } from '../application/venta.service';
import { CreateVentaDto } from '../application/dto/create-venta.dto';
import { UpdateVentaDto } from '../application/dto/update-venta.dto';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  crear(@Body() createDto: CreateVentaDto) {
    return this.ventaService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.ventaService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.ventaService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateVentaDto,
  ) {
    return this.ventaService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.ventaService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

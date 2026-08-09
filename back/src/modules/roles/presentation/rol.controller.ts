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
import { RolService } from '../application/rol.service';
import { CreateRolDto } from '../application/dto/create-rol.dto';
import { UpdateRolDto } from '../application/dto/update-rol.dto';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  crear(@Body() createDto: CreateRolDto) {
    return this.rolService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.rolService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateRolDto,
  ) {
    return this.rolService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.rolService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

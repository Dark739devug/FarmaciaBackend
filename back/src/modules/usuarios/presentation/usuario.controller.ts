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
import { UsuarioService } from '../application/usuario.service';
import { CreateUsuarioDto } from '../application/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../application/dto/update-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  crear(@Body() createDto: CreateUsuarioDto) {
    return this.usuarioService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.usuarioService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.usuarioService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}

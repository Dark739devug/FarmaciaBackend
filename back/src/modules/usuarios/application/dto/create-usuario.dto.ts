import { IsBoolean, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MaxLength(50)
  usuario: string;

  @IsString()
  @MaxLength(255)
  password: string;

  @IsString()
  @MaxLength(100)
  nombre_usuario: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono_usuario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  correo_usuario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  dpi_usuario?: string;

  @IsOptional()
  @IsBoolean()
  estado_usuario?: boolean;

  @IsInt()
  @Min(1)
  id_rol: number;

}

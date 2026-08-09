import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateProveedorDto {
  @IsInt()
  @Min(1)
  id_casa_medica: number;

  @IsString()
  @MaxLength(150)
  nombre_proveedor: string;

  @IsOptional()
  @IsBoolean()
  estado_proveedor?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono_proveedor?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  direccion_proveedor?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  correo_proveedor?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total_adquirido_proveedor?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  cantidad_adquirido_proveedor?: number;

}

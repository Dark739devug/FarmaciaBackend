import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateMedicamentoDto {
  @IsInt()
  @Min(1)
  id_presentacion: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  codigo_barras_medicamento?: string;

  @IsString()
  @MaxLength(150)
  nombre_medicamento: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  cantidad_por_paquete?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_mayorista?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_minimo?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_venta?: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  componente_activo?: string;

  @IsOptional()
  @IsBoolean()
  estado_medicamento?: boolean;

  @IsOptional()
  @IsBoolean()
  venta_libre?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  existencia_total_medicamento?: number;

}

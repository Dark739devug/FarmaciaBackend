import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateMetodoPagoDto {
  @IsString()
  @MaxLength(80)
  nombre_metodo_pago: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  cuenta_metodo_pago?: string;

  @IsOptional()
  @IsBoolean()
  estado_metodo_pago?: boolean;

}

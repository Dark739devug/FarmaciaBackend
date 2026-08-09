import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @MaxLength(150)
  nombre_cliente: string;

  @IsString()
  @MaxLength(20)
  nit_cliente: string;

  @IsOptional()
  @IsBoolean()
  estado_cliente?: boolean;

}

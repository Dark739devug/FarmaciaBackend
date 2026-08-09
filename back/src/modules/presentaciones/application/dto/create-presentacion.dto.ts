import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePresentacionDto {
  @IsString()
  @MaxLength(100)
  nombre_presentacion: string;

  @IsOptional()
  @IsBoolean()
  estado_presentacion?: boolean;

}

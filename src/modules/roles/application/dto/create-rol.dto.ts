import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRolDto {
  @IsString()
  @MaxLength(50)
  nombre_rol: string;

  @IsOptional()
  @IsBoolean()
  estado_rol?: boolean;

}

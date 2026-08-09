import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { CasaMedica } from '../../casas-medicas/domain/casa-medica.entity';

@Entity({ name: 'proveedores' })
export class Proveedor {
  @PrimaryGeneratedColumn({ name: 'id_proveedor' })
  id_proveedor: number;

  @Column({ type: 'int' })
  id_casa_medica: number;

  @Column({ type: 'varchar', length: 150 })
  nombre_proveedor: string;

  @Column({ type: 'boolean', default: true })
  estado_proveedor?: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono_proveedor?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion_proveedor?: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  correo_proveedor?: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  total_adquirido_proveedor?: number;

  @Column({ type: 'int', default: 0 })
  cantidad_adquirido_proveedor?: number;

  @ManyToOne(() => CasaMedica, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_casa_medica' })
  casaMedica?: CasaMedica;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

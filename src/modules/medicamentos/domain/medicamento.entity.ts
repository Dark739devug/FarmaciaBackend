import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Presentacion } from '../../presentaciones/domain/presentacion.entity';

@Entity({ name: 'medicamentos' })
export class Medicamento {
  @PrimaryGeneratedColumn({ name: 'id_medicamento' })
  id_medicamento: number;

  @Column({ type: 'int' })
  id_presentacion: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  codigo_barras_medicamento?: string;

  @Column({ type: 'varchar', length: 150 })
  nombre_medicamento: string;

  @Column({ type: 'int', default: 1 })
  cantidad_por_paquete?: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numericTransformer })
  precio_mayorista?: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numericTransformer })
  precio_minimo?: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numericTransformer })
  precio_venta?: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  componente_activo?: string;

  @Column({ type: 'boolean', default: true })
  estado_medicamento?: boolean;

  @Column({ type: 'boolean', default: true })
  venta_libre?: boolean;

  @Column({ type: 'int', default: 0 })
  existencia_total_medicamento?: number;

  @ManyToOne(() => Presentacion, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_presentacion' })
  presentacion?: Presentacion;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

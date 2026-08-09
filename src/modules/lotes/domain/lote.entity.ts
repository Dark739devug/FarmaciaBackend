import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Medicamento } from '../../medicamentos/domain/medicamento.entity';

@Entity({ name: 'lotes' })
export class Lote {
  @PrimaryGeneratedColumn({ name: 'id_lote' })
  id_lote: number;

  @Column({ type: 'int' })
  id_medicamento: number;

  @Column({ type: 'date' })
  fecha_vencimiento: string;

  @Column({ type: 'date', nullable: true })
  fecha_produccion?: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numericTransformer })
  precio_lote?: number;

  @Column({ type: 'boolean', default: true })
  estado_lote?: boolean;

  @Column({ type: 'int', default: 0 })
  existencia_lote?: number;

  @ManyToOne(() => Medicamento, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_medicamento' })
  medicamento?: Medicamento;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

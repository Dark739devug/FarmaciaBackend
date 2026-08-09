import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Venta } from '../../ventas/domain/venta.entity';
import { Medicamento } from '../../medicamentos/domain/medicamento.entity';
import { Lote } from '../../lotes/domain/lote.entity';

@Entity({ name: 'detalle_venta' })
export class DetalleVenta {
  @PrimaryGeneratedColumn({ name: 'id_detalle_venta' })
  id_detalle_venta: number;

  @Column({ type: 'int' })
  id_venta: number;

  @Column({ type: 'int' })
  id_medicamento: number;

  @Column({ type: 'int', nullable: true })
  id_lote?: number;

  @Column({ type: 'int' })
  cantidad_detalle_venta: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  subtotal_detalle_venta?: number;

  @Column({ type: 'boolean', default: true })
  estado_detalle_venta?: boolean;

  @ManyToOne(() => Venta, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_venta' })
  venta?: Venta;

  @ManyToOne(() => Medicamento, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_medicamento' })
  medicamento?: Medicamento;

  @ManyToOne(() => Lote, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_lote' })
  lote?: Lote;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

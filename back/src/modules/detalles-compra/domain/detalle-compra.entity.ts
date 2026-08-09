import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Compra } from '../../compras/domain/compra.entity';
import { Proveedor } from '../../proveedores/domain/proveedor.entity';
import { Medicamento } from '../../medicamentos/domain/medicamento.entity';
import { Lote } from '../../lotes/domain/lote.entity';

@Entity({ name: 'detalle_compra' })
export class DetalleCompra {
  @PrimaryGeneratedColumn({ name: 'id_detalle_compra' })
  id_detalle_compra: number;

  @Column({ type: 'int' })
  id_compra: number;

  @Column({ type: 'int' })
  id_proveedor: number;

  @Column({ type: 'int' })
  id_medicamento: number;

  @Column({ type: 'int', nullable: true })
  id_lote?: number;

  @Column({ type: 'int' })
  cantidad_compra: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  subtotal_compra?: number;

  @Column({ type: 'boolean', default: true })
  estado_compra?: boolean;

  @ManyToOne(() => Compra, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_compra' })
  compra?: Compra;

  @ManyToOne(() => Proveedor, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_proveedor' })
  proveedor?: Proveedor;

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

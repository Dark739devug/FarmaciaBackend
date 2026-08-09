import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Proveedor } from '../../proveedores/domain/proveedor.entity';

@Entity({ name: 'compras' })
export class Compra {
  @PrimaryGeneratedColumn({ name: 'id_compra' })
  id_compra: number;

  @Column({ type: 'int' })
  id_proveedor: number;

  @Column({ type: 'date', nullable: true })
  fecha_compra?: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  total_compra?: number;

  @Column({ type: 'boolean', default: true })
  estado_compra?: boolean;

  @ManyToOne(() => Proveedor, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_proveedor' })
  proveedor?: Proveedor;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

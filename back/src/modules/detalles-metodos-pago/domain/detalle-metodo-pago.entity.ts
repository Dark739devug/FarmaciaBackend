import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Venta } from '../../ventas/domain/venta.entity';
import { MetodoPago } from '../../metodos-pago/domain/metodo-pago.entity';

@Entity({ name: 'detalle_metodos_pago' })
export class DetalleMetodoPago {
  @PrimaryGeneratedColumn({ name: 'id_detalle_metodos_pago' })
  id_detalle_metodos_pago: number;

  @Column({ type: 'int' })
  id_venta: number;

  @Column({ type: 'int' })
  id_metodo_pago: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  cantidad_detalle_metodos_pago?: number;

  @Column({ type: 'boolean', default: true })
  estado_detalle_metodos_pago?: boolean;

  @ManyToOne(() => Venta, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_venta' })
  venta?: Venta;

  @ManyToOne(() => MetodoPago, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_metodo_pago' })
  metodoPago?: MetodoPago;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

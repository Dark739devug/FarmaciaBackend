import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { numericTransformer } from '../../../common/transformers/numeric.transformer';
import { Usuario } from '../../usuarios/domain/usuario.entity';
import { Cliente } from '../../clientes/domain/cliente.entity';

@Entity({ name: 'ventas' })
export class Venta {
  @PrimaryGeneratedColumn({ name: 'id_venta' })
  id_venta: number;

  @Column({ type: 'int' })
  id_usuario: number;

  @Column({ type: 'int' })
  id_cliente: number;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  fecha_venta?: Date;

  @Column({ type: 'boolean', default: true })
  estado_venta?: boolean;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numericTransformer })
  total_venta?: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_usuario' })
  usuario?: Usuario;

  @ManyToOne(() => Cliente, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_cliente' })
  cliente?: Cliente;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

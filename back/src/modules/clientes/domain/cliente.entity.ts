import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  id_cliente: number;

  @Column({ type: 'varchar', length: 150 })
  nombre_cliente: string;

  @Column({ type: 'varchar', length: 20 })
  nit_cliente: string;

  @Column({ type: 'boolean', default: true })
  estado_cliente?: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

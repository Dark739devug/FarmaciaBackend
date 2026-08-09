import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'metodos_pago' })
export class MetodoPago {
  @PrimaryGeneratedColumn({ name: 'id_metodo_pago' })
  id_metodo_pago: number;

  @Column({ type: 'varchar', length: 80 })
  nombre_metodo_pago: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cuenta_metodo_pago?: string;

  @Column({ type: 'boolean', default: true })
  estado_metodo_pago?: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

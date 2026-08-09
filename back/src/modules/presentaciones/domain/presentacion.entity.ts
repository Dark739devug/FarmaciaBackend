import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'presentaciones' })
export class Presentacion {
  @PrimaryGeneratedColumn({ name: 'id_presentacion' })
  id_presentacion: number;

  @Column({ type: 'varchar', length: 100 })
  nombre_presentacion: string;

  @Column({ type: 'boolean', default: true })
  estado_presentacion?: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

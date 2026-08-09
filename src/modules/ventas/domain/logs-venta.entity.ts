import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('logs_venta')
export class LogsVenta {
  @PrimaryGeneratedColumn()
  id_log_venta: number;

  @Column('text')
  descripcion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
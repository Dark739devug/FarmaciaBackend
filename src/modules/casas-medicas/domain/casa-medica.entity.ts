import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'casa_medica' })
export class CasaMedica {
  @PrimaryGeneratedColumn({ name: 'id_casa_medica' })
  id_casa_medica: number;

  @Column({ type: 'varchar', length: 150 })
  nombre_casa_medica: string;

  @Column({ type: 'boolean', default: true })
  estado_casa_medica?: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

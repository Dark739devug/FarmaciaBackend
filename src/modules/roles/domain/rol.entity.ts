import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  id_rol: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  nombre_rol: string;

  @Column({ type: 'boolean', default: true })
  estado_rol?: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

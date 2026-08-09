import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Rol } from '../../roles/domain/rol.entity';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_usuario: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  usuario: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_usuario: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono_usuario?: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  correo_usuario?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  dpi_usuario?: string;

  @Column({ type: 'boolean', default: true })
  estado_usuario?: boolean;

  @Column({ type: 'int' })
  id_rol: number;

  @ManyToOne(() => Rol, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_rol' })
  rol?: Rol;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

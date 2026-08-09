import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity({ name: 'logs_proveedor' })
export class LogsProveedor {
    @PrimaryGeneratedColumn({ name: 'id_log_proveedor' })
    id_log_proveedor: number;

    @Column({ type: 'varchar', length: '100' })
        descripcion: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    created_at: Date;
}
import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn} from "typeorm";



@Entity ({ name: 'logs_presentacion' })
export class LogsPresentacion {
    
    @PrimaryGeneratedColumn({name: 'id_log_presentacion'})
    id_log_presentacion: number;

    @Column({ type: 'varchar', length: '100' })
    descripcion: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    created_at: Date;
}



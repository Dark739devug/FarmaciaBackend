import { DeepPartial, ObjectLiteral, Repository } from 'typeorm';
export declare abstract class BaseRepository<T extends ObjectLiteral> {
    protected readonly repositorio: Repository<T>;
    protected readonly llavePrimaria: string;
    protected constructor(repositorio: Repository<T>, llavePrimaria: string);
    crear(datos: DeepPartial<T>): Promise<T>;
    listar(pagina: number, limite: number): Promise<[T[], number]>;
    buscarPorId(id: number): Promise<T | null>;
    actualizar(id: number, datos: DeepPartial<T>): Promise<T | null>;
    eliminar(id: number): Promise<{
        message: string;
    }>;
}

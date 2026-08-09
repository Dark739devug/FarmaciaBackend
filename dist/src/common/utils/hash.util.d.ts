export declare class HashUtil {
    static encriptar(texto: string): Promise<string>;
    static comparar(texto: string, hashAlmacenado: string): Promise<boolean>;
}

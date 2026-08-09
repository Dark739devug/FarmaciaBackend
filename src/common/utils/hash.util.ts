import { randomBytes, scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class HashUtil {
  /**
   * Genera un hash seguro utilizando scrypt con un salt aleatorio de 16 bytes.
   * Retorna una cadena con el formato "salt:hash" en formato hexadecimal.
   */
  static async encriptar(texto: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    // scrypt genera una clave derivada segura. Usamos un tamaño de 64 bytes.
    const derivedKey = (await scryptAsync(texto, salt, 64)) as Buffer;
    return `${salt}:${derivedKey.toString('hex')}`;
  }

  /**
   * Compara un texto en plano con un hash de formato "salt:hash".
   * Utiliza timingSafeEqual para mitigar ataques de canal lateral de sincronización.
   */
  static async comparar(texto: string, hashAlmacenado: string): Promise<boolean> {
    const partes = hashAlmacenado.split(':');
    if (partes.length !== 2) {
      return false;
    }
    const [salt, key] = partes;
    const derivedKey = (await scryptAsync(texto, salt, 64)) as Buffer;
    const keyBuffer = Buffer.from(key, 'hex');
    
    return timingSafeEqual(derivedKey, keyBuffer);
  }
}

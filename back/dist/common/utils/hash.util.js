"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashUtil = void 0;
const crypto_1 = require("crypto");
const util_1 = require("util");
const scryptAsync = (0, util_1.promisify)(crypto_1.scrypt);
class HashUtil {
    static async encriptar(texto) {
        const salt = (0, crypto_1.randomBytes)(16).toString('hex');
        const derivedKey = (await scryptAsync(texto, salt, 64));
        return `${salt}:${derivedKey.toString('hex')}`;
    }
    static async comparar(texto, hashAlmacenado) {
        const partes = hashAlmacenado.split(':');
        if (partes.length !== 2) {
            return false;
        }
        const [salt, key] = partes;
        const derivedKey = (await scryptAsync(texto, salt, 64));
        const keyBuffer = Buffer.from(key, 'hex');
        return (0, crypto_1.timingSafeEqual)(derivedKey, keyBuffer);
    }
}
exports.HashUtil = HashUtil;
//# sourceMappingURL=hash.util.js.map
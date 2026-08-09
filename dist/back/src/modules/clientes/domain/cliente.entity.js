"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
let Cliente = class Cliente {
    id_cliente;
    nombre_cliente;
    nit_cliente;
    estado_cliente;
    created_at;
    updated_at;
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_cliente' }),
    __metadata("design:type", Number)
], Cliente.prototype, "id_cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre_cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Cliente.prototype, "nit_cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "estado_cliente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Cliente.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Cliente.prototype, "updated_at", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)({ name: 'clientes' })
], Cliente);
//# sourceMappingURL=cliente.entity.js.map
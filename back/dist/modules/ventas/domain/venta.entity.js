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
exports.Venta = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const usuario_entity_1 = require("../../usuarios/domain/usuario.entity");
const cliente_entity_1 = require("../../clientes/domain/cliente.entity");
let Venta = class Venta {
    id_venta;
    id_usuario;
    id_cliente;
    fecha_venta;
    estado_venta;
    total_venta;
    usuario;
    cliente;
    created_at;
    updated_at;
};
exports.Venta = Venta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_venta' }),
    __metadata("design:type", Number)
], Venta.prototype, "id_venta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Venta.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Venta.prototype, "id_cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], Venta.prototype, "fecha_venta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Venta.prototype, "estado_venta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Venta.prototype, "total_venta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Venta.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_cliente' }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Venta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Venta.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Venta.prototype, "updated_at", void 0);
exports.Venta = Venta = __decorate([
    (0, typeorm_1.Entity)({ name: 'ventas' })
], Venta);
//# sourceMappingURL=venta.entity.js.map
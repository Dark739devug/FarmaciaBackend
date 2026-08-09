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
exports.Compra = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const proveedor_entity_1 = require("../../proveedores/domain/proveedor.entity");
let Compra = class Compra {
    id_compra;
    id_proveedor;
    fecha_compra;
    total_compra;
    estado_compra;
    proveedor;
    created_at;
    updated_at;
};
exports.Compra = Compra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_compra' }),
    __metadata("design:type", Number)
], Compra.prototype, "id_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Compra.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Compra.prototype, "fecha_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Compra.prototype, "total_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Compra.prototype, "estado_compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proveedor_entity_1.Proveedor, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proveedor' }),
    __metadata("design:type", proveedor_entity_1.Proveedor)
], Compra.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Compra.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Compra.prototype, "updated_at", void 0);
exports.Compra = Compra = __decorate([
    (0, typeorm_1.Entity)({ name: 'compras' })
], Compra);
//# sourceMappingURL=compra.entity.js.map
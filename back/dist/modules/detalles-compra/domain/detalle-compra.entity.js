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
exports.DetalleCompra = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const compra_entity_1 = require("../../compras/domain/compra.entity");
const proveedor_entity_1 = require("../../proveedores/domain/proveedor.entity");
const medicamento_entity_1 = require("../../medicamentos/domain/medicamento.entity");
const lote_entity_1 = require("../../lotes/domain/lote.entity");
let DetalleCompra = class DetalleCompra {
    id_detalle_compra;
    id_compra;
    id_proveedor;
    id_medicamento;
    id_lote;
    cantidad_compra;
    subtotal_compra;
    estado_compra;
    compra;
    proveedor;
    medicamento;
    lote;
    created_at;
    updated_at;
};
exports.DetalleCompra = DetalleCompra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_detalle_compra' }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "id_detalle_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "id_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "id_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "id_lote", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "cantidad_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], DetalleCompra.prototype, "subtotal_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], DetalleCompra.prototype, "estado_compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => compra_entity_1.Compra, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_compra' }),
    __metadata("design:type", compra_entity_1.Compra)
], DetalleCompra.prototype, "compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proveedor_entity_1.Proveedor, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proveedor' }),
    __metadata("design:type", proveedor_entity_1.Proveedor)
], DetalleCompra.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicamento_entity_1.Medicamento, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_medicamento' }),
    __metadata("design:type", medicamento_entity_1.Medicamento)
], DetalleCompra.prototype, "medicamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lote_entity_1.Lote, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_lote' }),
    __metadata("design:type", lote_entity_1.Lote)
], DetalleCompra.prototype, "lote", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], DetalleCompra.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], DetalleCompra.prototype, "updated_at", void 0);
exports.DetalleCompra = DetalleCompra = __decorate([
    (0, typeorm_1.Entity)({ name: 'detalle_compra' })
], DetalleCompra);
//# sourceMappingURL=detalle-compra.entity.js.map
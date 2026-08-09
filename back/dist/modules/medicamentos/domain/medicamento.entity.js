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
exports.Medicamento = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const presentacion_entity_1 = require("../../presentaciones/domain/presentacion.entity");
let Medicamento = class Medicamento {
    id_medicamento;
    id_presentacion;
    codigo_barras_medicamento;
    nombre_medicamento;
    cantidad_por_paquete;
    precio_mayorista;
    precio_minimo;
    precio_venta;
    componente_activo;
    estado_medicamento;
    venta_libre;
    existencia_total_medicamento;
    presentacion;
    created_at;
    updated_at;
};
exports.Medicamento = Medicamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_medicamento' }),
    __metadata("design:type", Number)
], Medicamento.prototype, "id_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Medicamento.prototype, "id_presentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Medicamento.prototype, "codigo_barras_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Medicamento.prototype, "nombre_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Medicamento.prototype, "cantidad_por_paquete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Medicamento.prototype, "precio_mayorista", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Medicamento.prototype, "precio_minimo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Medicamento.prototype, "precio_venta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Medicamento.prototype, "componente_activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Medicamento.prototype, "estado_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Medicamento.prototype, "venta_libre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Medicamento.prototype, "existencia_total_medicamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => presentacion_entity_1.Presentacion, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_presentacion' }),
    __metadata("design:type", presentacion_entity_1.Presentacion)
], Medicamento.prototype, "presentacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Medicamento.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Medicamento.prototype, "updated_at", void 0);
exports.Medicamento = Medicamento = __decorate([
    (0, typeorm_1.Entity)({ name: 'medicamentos' })
], Medicamento);
//# sourceMappingURL=medicamento.entity.js.map
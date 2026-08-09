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
exports.Lote = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const medicamento_entity_1 = require("../../medicamentos/domain/medicamento.entity");
let Lote = class Lote {
    id_lote;
    id_medicamento;
    fecha_vencimiento;
    fecha_produccion;
    precio_lote;
    estado_lote;
    existencia_lote;
    medicamento;
    created_at;
    updated_at;
};
exports.Lote = Lote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_lote' }),
    __metadata("design:type", Number)
], Lote.prototype, "id_lote", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Lote.prototype, "id_medicamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Lote.prototype, "fecha_vencimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Lote.prototype, "fecha_produccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Lote.prototype, "precio_lote", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Lote.prototype, "estado_lote", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Lote.prototype, "existencia_lote", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicamento_entity_1.Medicamento, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_medicamento' }),
    __metadata("design:type", medicamento_entity_1.Medicamento)
], Lote.prototype, "medicamento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Lote.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Lote.prototype, "updated_at", void 0);
exports.Lote = Lote = __decorate([
    (0, typeorm_1.Entity)({ name: 'lotes' })
], Lote);
//# sourceMappingURL=lote.entity.js.map
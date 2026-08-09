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
exports.DetalleMetodoPago = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const venta_entity_1 = require("../../ventas/domain/venta.entity");
const metodo_pago_entity_1 = require("../../metodos-pago/domain/metodo-pago.entity");
let DetalleMetodoPago = class DetalleMetodoPago {
    id_detalle_metodos_pago;
    id_venta;
    id_metodo_pago;
    cantidad_detalle_metodos_pago;
    estado_detalle_metodos_pago;
    venta;
    metodoPago;
    created_at;
    updated_at;
};
exports.DetalleMetodoPago = DetalleMetodoPago;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_detalle_metodos_pago' }),
    __metadata("design:type", Number)
], DetalleMetodoPago.prototype, "id_detalle_metodos_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleMetodoPago.prototype, "id_venta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetalleMetodoPago.prototype, "id_metodo_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], DetalleMetodoPago.prototype, "cantidad_detalle_metodos_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], DetalleMetodoPago.prototype, "estado_detalle_metodos_pago", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => venta_entity_1.Venta, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_venta' }),
    __metadata("design:type", venta_entity_1.Venta)
], DetalleMetodoPago.prototype, "venta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => metodo_pago_entity_1.MetodoPago, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_metodo_pago' }),
    __metadata("design:type", metodo_pago_entity_1.MetodoPago)
], DetalleMetodoPago.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], DetalleMetodoPago.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], DetalleMetodoPago.prototype, "updated_at", void 0);
exports.DetalleMetodoPago = DetalleMetodoPago = __decorate([
    (0, typeorm_1.Entity)({ name: 'detalle_metodos_pago' })
], DetalleMetodoPago);
//# sourceMappingURL=detalle-metodo-pago.entity.js.map
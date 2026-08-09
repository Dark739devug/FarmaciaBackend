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
exports.Proveedor = void 0;
const typeorm_1 = require("typeorm");
const numeric_transformer_1 = require("../../../common/transformers/numeric.transformer");
const casa_medica_entity_1 = require("../../casas-medicas/domain/casa-medica.entity");
let Proveedor = class Proveedor {
    id_proveedor;
    id_casa_medica;
    nombre_proveedor;
    estado_proveedor;
    telefono_proveedor;
    direccion_proveedor;
    correo_proveedor;
    total_adquirido_proveedor;
    cantidad_adquirido_proveedor;
    casaMedica;
    created_at;
    updated_at;
};
exports.Proveedor = Proveedor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proveedor' }),
    __metadata("design:type", Number)
], Proveedor.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Proveedor.prototype, "id_casa_medica", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Proveedor.prototype, "nombre_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Proveedor.prototype, "estado_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "telefono_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "direccion_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "correo_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2, default: 0, transformer: numeric_transformer_1.numericTransformer }),
    __metadata("design:type", Number)
], Proveedor.prototype, "total_adquirido_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Proveedor.prototype, "cantidad_adquirido_proveedor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => casa_medica_entity_1.CasaMedica, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_casa_medica' }),
    __metadata("design:type", casa_medica_entity_1.CasaMedica)
], Proveedor.prototype, "casaMedica", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Proveedor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Proveedor.prototype, "updated_at", void 0);
exports.Proveedor = Proveedor = __decorate([
    (0, typeorm_1.Entity)({ name: 'proveedores' })
], Proveedor);
//# sourceMappingURL=proveedor.entity.js.map
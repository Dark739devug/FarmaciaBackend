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
exports.Presentacion = void 0;
const typeorm_1 = require("typeorm");
let Presentacion = class Presentacion {
    id_presentacion;
    nombre_presentacion;
    estado_presentacion;
    created_at;
    updated_at;
};
exports.Presentacion = Presentacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_presentacion' }),
    __metadata("design:type", Number)
], Presentacion.prototype, "id_presentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Presentacion.prototype, "nombre_presentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Presentacion.prototype, "estado_presentacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Presentacion.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Presentacion.prototype, "updated_at", void 0);
exports.Presentacion = Presentacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'presentaciones' })
], Presentacion);
//# sourceMappingURL=presentacion.entity.js.map
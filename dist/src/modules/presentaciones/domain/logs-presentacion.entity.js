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
exports.LogsPresentacion = void 0;
const typeorm_1 = require("typeorm");
let LogsPresentacion = class LogsPresentacion {
    id_log_presentacion;
    descripcion;
    created_at;
};
exports.LogsPresentacion = LogsPresentacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_log_presentacion' }),
    __metadata("design:type", Number)
], LogsPresentacion.prototype, "id_log_presentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '100' }),
    __metadata("design:type", String)
], LogsPresentacion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], LogsPresentacion.prototype, "created_at", void 0);
exports.LogsPresentacion = LogsPresentacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'logs_presentacion' })
], LogsPresentacion);
//# sourceMappingURL=logs-presentacion.entity.js.map
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
exports.LogsProveedor = void 0;
const typeorm_1 = require("typeorm");
let LogsProveedor = class LogsProveedor {
    id_log_proveedor;
    descripcion;
    created_at;
};
exports.LogsProveedor = LogsProveedor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_log_proveedor' }),
    __metadata("design:type", Number)
], LogsProveedor.prototype, "id_log_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '100' }),
    __metadata("design:type", String)
], LogsProveedor.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], LogsProveedor.prototype, "created_at", void 0);
exports.LogsProveedor = LogsProveedor = __decorate([
    (0, typeorm_1.Entity)({ name: 'logs_proveedor' })
], LogsProveedor);
//# sourceMappingURL=logs-proveedor.entity.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleMetodoPagoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_repository_1 = require("../../../common/base/base.repository");
const detalle_metodo_pago_entity_1 = require("../domain/detalle-metodo-pago.entity");
let DetalleMetodoPagoRepository = class DetalleMetodoPagoRepository extends base_repository_1.BaseRepository {
    constructor(repositorio) {
        super(repositorio, 'id_detalle_metodos_pago');
    }
};
exports.DetalleMetodoPagoRepository = DetalleMetodoPagoRepository;
exports.DetalleMetodoPagoRepository = DetalleMetodoPagoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detalle_metodo_pago_entity_1.DetalleMetodoPago)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetalleMetodoPagoRepository);
//# sourceMappingURL=detalle-metodo-pago.repository.js.map
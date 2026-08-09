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
exports.PresentacionService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const presentacion_repository_1 = require("../infrastructure/presentacion.repository");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const logs_presentacion_entity_1 = require("../domain/logs-presentacion.entity");
let PresentacionService = class PresentacionService extends base_service_1.BaseService {
    presentacionRepository;
    logRepository;
    constructor(presentacionRepository, logRepository) {
        super(presentacionRepository, 'Presentacion');
        this.presentacionRepository = presentacionRepository;
        this.logRepository = logRepository;
    }
    async crear(crearDto) {
        const nuevaPresentacion = await super.crear(crearDto);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        let descripcion = 'Presentacion ' + nuevaPresentacion.nombre_presentacion + ' generada el dia ' + fecha + 'a las ' + hora;
        await this.logRepository.save({
            descripcion: descripcion
        });
        return nuevaPresentacion;
    }
};
exports.PresentacionService = PresentacionService;
exports.PresentacionService = PresentacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(logs_presentacion_entity_1.LogsPresentacion)),
    __metadata("design:paramtypes", [presentacion_repository_1.PresentacionRepository,
        typeorm_2.Repository])
], PresentacionService);
//# sourceMappingURL=presentacion.service.js.map
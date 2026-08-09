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
exports.CasaMedicaService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const casa_medica_repository_1 = require("../infrastructure/casa-medica.repository");
let CasaMedicaService = class CasaMedicaService extends base_service_1.BaseService {
    casaMedicaRepository;
    constructor(casaMedicaRepository) {
        super(casaMedicaRepository, 'CasaMedica');
        this.casaMedicaRepository = casaMedicaRepository;
    }
};
exports.CasaMedicaService = CasaMedicaService;
exports.CasaMedicaService = CasaMedicaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [casa_medica_repository_1.CasaMedicaRepository])
], CasaMedicaService);
//# sourceMappingURL=casa-medica.service.js.map
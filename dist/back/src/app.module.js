"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const roles_module_1 = require("./modules/roles/roles.module");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
const clientes_module_1 = require("./modules/clientes/clientes.module");
const casas_medicas_module_1 = require("./modules/casas-medicas/casas-medicas.module");
const proveedores_module_1 = require("./modules/proveedores/proveedores.module");
const presentaciones_module_1 = require("./modules/presentaciones/presentaciones.module");
const metodos_pago_module_1 = require("./modules/metodos-pago/metodos-pago.module");
const medicamentos_module_1 = require("./modules/medicamentos/medicamentos.module");
const lotes_module_1 = require("./modules/lotes/lotes.module");
const compras_module_1 = require("./modules/compras/compras.module");
const detalles_compra_module_1 = require("./modules/detalles-compra/detalles-compra.module");
const ventas_module_1 = require("./modules/ventas/ventas.module");
const detalles_venta_module_1 = require("./modules/detalles-venta/detalles-venta.module");
const detalles_metodos_pago_module_1 = require("./modules/detalles-metodos-pago/detalles-metodos-pago.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.typeOrmConfig),
            roles_module_1.RolesModule,
            usuarios_module_1.UsuariosModule,
            clientes_module_1.ClientesModule,
            casas_medicas_module_1.CasasMedicasModule,
            proveedores_module_1.ProveedoresModule,
            presentaciones_module_1.PresentacionesModule,
            metodos_pago_module_1.MetodosPagoModule,
            medicamentos_module_1.MedicamentosModule,
            lotes_module_1.LotesModule,
            compras_module_1.ComprasModule,
            detalles_compra_module_1.DetallesCompraModule,
            ventas_module_1.VentasModule,
            detalles_venta_module_1.DetallesVentaModule,
            detalles_metodos_pago_module_1.DetallesMetodosPagoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
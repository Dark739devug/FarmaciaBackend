import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config';
import { RolesModule } from './modules/roles/roles.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CasasMedicasModule } from './modules/casas-medicas/casas-medicas.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { PresentacionesModule } from './modules/presentaciones/presentaciones.module';
import { MetodosPagoModule } from './modules/metodos-pago/metodos-pago.module';
import { MedicamentosModule } from './modules/medicamentos/medicamentos.module';
import { LotesModule } from './modules/lotes/lotes.module';
import { ComprasModule } from './modules/compras/compras.module';
import { DetallesCompraModule } from './modules/detalles-compra/detalles-compra.module';
import { VentasModule } from './modules/ventas/ventas.module';
import { DetallesVentaModule } from './modules/detalles-venta/detalles-venta.module';
import { DetallesMetodosPagoModule } from './modules/detalles-metodos-pago/detalles-metodos-pago.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    RolesModule,
    UsuariosModule,
    ClientesModule,
    CasasMedicasModule,
    ProveedoresModule,
    PresentacionesModule,
    MetodosPagoModule,
    MedicamentosModule,
    LotesModule,
    ComprasModule,
    DetallesCompraModule,
    VentasModule,
    DetallesVentaModule,
    DetallesMetodosPagoModule,
  ],
})
export class AppModule {}

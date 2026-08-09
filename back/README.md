# Farmacia Backend TDS

API REST (NestJS + TypeORM + PostgreSQL) con **arquitectura en capas**.

## Capas

```
src/
  common/            # Base generica reutilizable (BaseRepository, BaseService, DTOs, transformers)
  config/            # Configuracion de TypeORM
  modules/<entidad>/
    domain/          # Entidad (modelo de datos)
    infrastructure/  # Acceso a datos (repositorio, encapsula TypeORM)
    application/     # Logica de negocio (servicio) + DTOs
    presentation/    # Controlador (HTTP)
    <entidad>.module.ts
```

Cada CRUD nuevo solo extiende `BaseRepository` y `BaseService`.

## Instalacion

```bash
npm install
cp .env.example .env      # completar DB_USERNAME y DB_PASSWORD
psql -U postgres -f script-sql.sql
npm run start:dev
```

## Rutas (prefijo global `/api`)

| Recurso | Ruta |
|---|---|
| Roles | `/api/roles` |
| Usuarios | `/api/usuarios` |
| Clientes | `/api/clientes` |
| Casas medicas | `/api/casas-medicas` |
| Proveedores | `/api/proveedores` |
| Presentaciones | `/api/presentaciones` |
| Metodos de pago | `/api/metodos-pago` |
| Medicamentos | `/api/medicamentos` |
| Lotes | `/api/lotes` |
| Compras | `/api/compras` |
| Detalles de compra | `/api/detalles-compra` |
| Ventas | `/api/ventas` |
| Detalles de venta | `/api/detalles-venta` |
| Detalles de metodos de pago | `/api/detalles-metodos-pago` |

Operaciones por recurso:

| Metodo | Endpoint | Accion |
|---|---|---|
| POST | `/api/<recurso>` | crear |
| GET | `/api/<recurso>?pagina=1&limite=10` | listar paginado |
| GET | `/api/<recurso>/:id` | buscar por id |
| PATCH | `/api/<recurso>/:id` | actualizar |
| DELETE | `/api/<recurso>/:id` | eliminar |

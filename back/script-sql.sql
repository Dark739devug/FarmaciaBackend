-- =====================================================
-- SISTEMA DE FARMACIA ARQUI TDS 2026
-- PostgreSQL
-- =====================================================

CREATE DATABASE farmacia_tds;
-- \c farmacia_tds

CREATE SCHEMA IF NOT EXISTS farmacia;
SET search_path TO farmacia;

-- ============ CATÁLOGOS ============

CREATE TABLE roles (
    id_rol          SERIAL PRIMARY KEY,
    nombre_rol      VARCHAR(50) NOT NULL UNIQUE,
    estado_rol      BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE usuarios (
    id_usuario      SERIAL PRIMARY KEY,
    usuario         VARCHAR(50) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,
    nombre_usuario  VARCHAR(100) NOT NULL,
    telefono_usuario VARCHAR(20),
    correo_usuario  VARCHAR(120) UNIQUE,
    dpi_usuario     VARCHAR(20) UNIQUE,
    estado_usuario  BOOLEAN NOT NULL DEFAULT TRUE,
    id_rol          INT NOT NULL REFERENCES roles(id_rol),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE clientes (
    id_cliente      SERIAL PRIMARY KEY,
    nombre_cliente  VARCHAR(150) NOT NULL,
    nit_cliente     VARCHAR(20) NOT NULL DEFAULT 'CF',
    estado_cliente  BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE casa_medica (
    id_casa_medica      SERIAL PRIMARY KEY,
    nombre_casa_medica  VARCHAR(150) NOT NULL,
    estado_casa_medica  BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE proveedores (
    id_proveedor                SERIAL PRIMARY KEY,
    id_casa_medica              INT NOT NULL REFERENCES casa_medica(id_casa_medica),
    nombre_proveedor            VARCHAR(150) NOT NULL,
    estado_proveedor            BOOLEAN NOT NULL DEFAULT TRUE,
    telefono_proveedor          VARCHAR(20),
    direccion_proveedor         VARCHAR(255),
    correo_proveedor            VARCHAR(120),
    total_adquirido_proveedor   NUMERIC(12,2) NOT NULL DEFAULT 0,
    cantidad_adquirido_proveedor INT NOT NULL DEFAULT 0,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE presentaciones (
    id_presentacion     SERIAL PRIMARY KEY,
    nombre_presentacion VARCHAR(100) NOT NULL,
    estado_presentacion BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE metodos_pago (
    id_metodo_pago      SERIAL PRIMARY KEY,
    nombre_metodo_pago  VARCHAR(80) NOT NULL,
    cuenta_metodo_pago  VARCHAR(50),
    estado_metodo_pago  BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============ INVENTARIO ============

CREATE TABLE medicamentos (
    id_medicamento              SERIAL PRIMARY KEY,
    id_presentacion             INT NOT NULL REFERENCES presentaciones(id_presentacion),
    codigo_barras_medicamento   VARCHAR(50) UNIQUE,
    nombre_medicamento          VARCHAR(150) NOT NULL,
    cantidad_por_paquete        INT NOT NULL DEFAULT 1 CHECK (cantidad_por_paquete > 0),
    precio_mayorista            NUMERIC(10,2) DEFAULT 0 CHECK (precio_mayorista >= 0),
    precio_minimo               NUMERIC(10,2) DEFAULT 0 CHECK (precio_minimo >= 0),
    precio_venta                NUMERIC(10,2) NOT NULL DEFAULT 0 CHECK (precio_venta >= 0),
    componente_activo           VARCHAR(255),
    estado_medicamento          BOOLEAN NOT NULL DEFAULT TRUE,
    venta_libre                 BOOLEAN NOT NULL DEFAULT TRUE,
    existencia_total_medicamento INT NOT NULL DEFAULT 0 CHECK (existencia_total_medicamento >= 0),
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE lotes (
    id_lote         SERIAL PRIMARY KEY,
    id_medicamento  INT NOT NULL REFERENCES medicamentos(id_medicamento),
    fecha_vencimiento DATE NOT NULL,
    fecha_produccion  DATE,
    precio_lote     NUMERIC(10,2) NOT NULL DEFAULT 0 CHECK (precio_lote >= 0),
    estado_lote     BOOLEAN NOT NULL DEFAULT TRUE,
    existencia_lote INT NOT NULL DEFAULT 0 CHECK (existencia_lote >= 0),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_fechas_lote CHECK (fecha_produccion IS NULL OR fecha_produccion <= fecha_vencimiento)
);

-- ============ COMPRAS ============

CREATE TABLE compras (
    id_compra       SERIAL PRIMARY KEY,
    id_proveedor    INT NOT NULL REFERENCES proveedores(id_proveedor),
    fecha_compra    DATE NOT NULL DEFAULT CURRENT_DATE,
    total_compra    NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_compra >= 0),
    estado_compra   BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE detalle_compra (
    id_detalle_compra SERIAL PRIMARY KEY,
    id_compra       INT NOT NULL REFERENCES compras(id_compra) ON DELETE CASCADE,
    id_proveedor    INT NOT NULL REFERENCES proveedores(id_proveedor),
    id_medicamento  INT NOT NULL REFERENCES medicamentos(id_medicamento),
    id_lote         INT REFERENCES lotes(id_lote),
    cantidad_compra INT NOT NULL CHECK (cantidad_compra > 0),
    subtotal_compra NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (subtotal_compra >= 0),
    estado_compra   BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============ VENTAS ============

CREATE TABLE ventas (
    id_venta        SERIAL PRIMARY KEY,
    id_usuario      INT NOT NULL REFERENCES usuarios(id_usuario),
    id_cliente      INT NOT NULL REFERENCES clientes(id_cliente),
    fecha_venta     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    estado_venta    BOOLEAN NOT NULL DEFAULT TRUE,
    total_venta     NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_venta >= 0),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE detalle_venta (
    id_detalle_venta      SERIAL PRIMARY KEY,
    id_venta              INT NOT NULL REFERENCES ventas(id_venta) ON DELETE CASCADE,
    id_medicamento        INT NOT NULL REFERENCES medicamentos(id_medicamento),
    id_lote               INT REFERENCES lotes(id_lote),
    cantidad_detalle_venta INT NOT NULL CHECK (cantidad_detalle_venta > 0),
    subtotal_detalle_venta NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (subtotal_detalle_venta >= 0),
    estado_detalle_venta  BOOLEAN NOT NULL DEFAULT TRUE,
    created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE detalle_metodos_pago (
    id_detalle_metodos_pago SERIAL PRIMARY KEY,
    id_venta                INT NOT NULL REFERENCES ventas(id_venta) ON DELETE CASCADE,
    id_metodo_pago          INT NOT NULL REFERENCES metodos_pago(id_metodo_pago),
    cantidad_detalle_metodos_pago NUMERIC(12,2) NOT NULL CHECK (cantidad_detalle_metodos_pago > 0),
    estado_detalle_metodos_pago BOOLEAN NOT NULL DEFAULT TRUE,
    created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============ ÍNDICES ============

CREATE INDEX idx_usuarios_rol            ON usuarios(id_rol);
CREATE INDEX idx_proveedores_casa        ON proveedores(id_casa_medica);
CREATE INDEX idx_medicamentos_present    ON medicamentos(id_presentacion);
CREATE INDEX idx_medicamentos_nombre     ON medicamentos(nombre_medicamento);
CREATE INDEX idx_lotes_medicamento       ON lotes(id_medicamento);
CREATE INDEX idx_lotes_vencimiento       ON lotes(fecha_vencimiento);
CREATE INDEX idx_compras_proveedor       ON compras(id_proveedor);
CREATE INDEX idx_detcompra_compra        ON detalle_compra(id_compra);
CREATE INDEX idx_detcompra_medicamento   ON detalle_compra(id_medicamento);
CREATE INDEX idx_ventas_cliente          ON ventas(id_cliente);
CREATE INDEX idx_ventas_usuario          ON ventas(id_usuario);
CREATE INDEX idx_ventas_fecha            ON ventas(fecha_venta);
CREATE INDEX idx_detventa_venta          ON detalle_venta(id_venta);
CREATE INDEX idx_detventa_medicamento    ON detalle_venta(id_medicamento);
CREATE INDEX idx_detmetpago_venta        ON detalle_metodos_pago(id_venta);
CREATE INDEX idx_detmetpago_metodo       ON detalle_metodos_pago(id_metodo_pago);
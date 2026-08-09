"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetalleCompraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_detalle_compra_dto_1 = require("./create-detalle-compra.dto");
class UpdateDetalleCompraDto extends (0, mapped_types_1.PartialType)(create_detalle_compra_dto_1.CreateDetalleCompraDto) {
}
exports.UpdateDetalleCompraDto = UpdateDetalleCompraDto;
//# sourceMappingURL=update-detalle-compra.dto.js.map
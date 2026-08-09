"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePresentacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_presentacion_dto_1 = require("./create-presentacion.dto");
class UpdatePresentacionDto extends (0, mapped_types_1.PartialType)(create_presentacion_dto_1.CreatePresentacionDto) {
}
exports.UpdatePresentacionDto = UpdatePresentacionDto;
//# sourceMappingURL=update-presentacion.dto.js.map
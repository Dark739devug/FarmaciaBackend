"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicamentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medicamento_dto_1 = require("./create-medicamento.dto");
class UpdateMedicamentoDto extends (0, mapped_types_1.PartialType)(create_medicamento_dto_1.CreateMedicamentoDto) {
}
exports.UpdateMedicamentoDto = UpdateMedicamentoDto;
//# sourceMappingURL=update-medicamento.dto.js.map
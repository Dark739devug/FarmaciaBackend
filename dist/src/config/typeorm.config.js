"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (config) => ({
        type: 'postgres',
        host: config.get('DB_HOST', 'localhost'),
        port: Number(config.get('DB_PORT', '5432')),
        username: config.get('DB_USERNAME', 'postgres'),
        password: config.get('DB_PASSWORD', 'Somelikeyou12K@'),
        database: config.get('DB_DATABASE', 'Script-sql.sql'),
        schema: config.get('DB_SCHEMA', 'public'),
        autoLoadEntities: true,
        synchronize: config.get('DB_SYNCHRONIZE', 'false') === 'true',
        logging: config.get('DB_LOGGING', 'false') === 'true',
    }),
};
//# sourceMappingURL=typeorm.config.js.map
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'postgres' as const,
    host: config.get<string>('DB_HOST', 'localhost'),
    port: Number(config.get<string>('DB_PORT', '5432')),
    username: config.get<string>('DB_USERNAME', 'postgres'),
    password: config.get<string>('DB_PASSWORD', 'Somelikeyou12K@'),
    database: config.get<string>('DB_DATABASE', 'Script-sql.sql'),
    schema: config.get<string>('DB_SCHEMA', 'public'),
    autoLoadEntities: true,
    synchronize: config.get<string>('DB_SYNCHRONIZE', 'false') === 'true',
    logging: config.get<string>('DB_LOGGING', 'false') === 'true',
  }),
};

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'postgres' as const,
    host: config.get<string>('DB_HOST'),
    port: Number(config.get<string>('DB_PORT')),
    username: config.get<string>('DB_USERNAME'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_DATABASE'),
    schema: config.get<string>('DB_SCHEMA'),
    autoLoadEntities: true,
    synchronize: config.get<string>('DB_SYNCHRONIZE', 'false') === 'true',
    logging: config.get<string>('DB_LOGGING', 'false') === 'true',
  }),
};

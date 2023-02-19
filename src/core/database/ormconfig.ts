/* eslint-disable @typescript-eslint/no-var-requires */
import { DataSource } from "typeorm";
require('dotenv-flow').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT) || 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [
    __dirname + '/../../**/**/*.entity{.ts,.js}',
    // "dist/**/**/*.entity.js" // Corrigindo possível problema de importação da Entity.          
  ],
  migrations: [
    __dirname + '../migrations/*{.ts,.js}',
    __dirname + './migrations/*{.ts,.js}',
    "dist/core/database/migrations/*{.ts,.js}"
  ],
  synchronize: false, //Essa propriedade não deve ser utilizada em produção! Caso contrário os dados poderão ser perdidos.
  migrationsRun: false,
  migrationsTableName: 'history'
});

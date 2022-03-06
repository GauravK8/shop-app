import * as Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { logger } from './logger';
dotenv.config();

export default class Database {
  db: string;
  user: string;
  password: string;
  host: string;
  port: number;
  maxPool: number;
  minPool: number;
  database: Sequelize.Sequelize;
  private static dbInstance: Sequelize.Sequelize;

  public static getInstance(): Sequelize.Sequelize {
    if (!Database.dbInstance) {
      Database.dbInstance = new Database().database;
    }
    return Database.dbInstance;
  }

  constructor() {
    this.db = process.env.DB_NAME;
    this.user = process.env.DB_USER;
    this.password = process.env.DB_PASS;
    this.host = process.env.DB_HOST;
    this.port = Number(process.env.DB_PORT) || 3306;
    this.maxPool = Number(process.env.MAX_POOL) || 10;
    this.minPool = Number(process.env.MIN_POOL) || 1;

    this.database = new Sequelize.Sequelize(this.db, this.user, this.password, {
      host: this.host,
      dialect: 'mysql',
      port: this.port,
      pool: {
        max: this.maxPool,
        min: this.minPool,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        freezeTableName: true,
      },
      logging: false,
    });

    this.database
      .authenticate()
      .then(() => {
        logger.warn('MySQL (Sequelize) Connection has been established successfully.');
      })
      .catch((err) => {
        logger.error('Unable to connect to the database:', err);
      });

    this.database.sync({
      force: false,
      alter: false,
    });

    Database.dbInstance = this.database;
  }
}

import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { MainRouter } from './api/routes/main.router';
import { LoggerStream, logger } from './config/logger';
import mysql2, { ConnectionOptions } from 'mysql2/promise';
import Database from './config/db';
import { join } from 'path';

export class App {
  public app: express.Application;
  // public route: any;
  constructor() {
    this.app = express();
    this.configureServer();
    this.setupRoutes();
    this.setupLogging();
    this.createDBIfNotExists();
  }

  // Configure the server options
  private configureServer() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    this.app.get("/", express.static(join(__dirname, "../assets/images/")));
    this.setupRoutes();
  }
  // Setup the Routes
  private setupRoutes() {
    this.app.get("/images/:image", (req, res) => {
      res.sendFile(join(__dirname, `../assets/images/${req.params.image}`));
    });
    let router = new MainRouter().router;
    this.app.use('/', router);
  }

  private setupLogging() {
    this.app.use(morgan('combined', { stream: new LoggerStream() }));
  }

  private async createDBIfNotExists() {
    const dbName = process.env.DB_NAME;
    const host = process.env.DB_HOST;
    const port = Number(process.env.DB_PORT);
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;

    const connectionOptions: ConnectionOptions = {
      host,
      port,
      user,
      password,
    };

    mysql2.createConnection(connectionOptions).then((connection) => {
      connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then(async (res) => {
        const result = await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
        logger.warn(`Database create or successfully checked. ${dbName}`);

        // sync database
        const db = Database.getInstance();
        await db.sync();
      });
    });
  }
}

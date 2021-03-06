import { Server } from '@overnightjs/core';
import express from 'express';
import morgan from 'morgan';
import Secrets from './controllers/Secrets';
import EnvConfigs from './lib/EnvConfigs';

import './database';

export class Application extends Server {

  constructor() {
    super();
    this.middlewares();
    this.loadControllers();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  private loadControllers() {
    const secrets = new Secrets();

    super.addControllers([secrets]);
  }

  public start() {
    const port = EnvConfigs.getAppPort();

    this.app.listen(port, () => console.log(`Server Online at port: ${port}`));
  }
}

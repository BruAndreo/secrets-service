import { Request, Response } from 'express';
import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import SecretsDomain from '../domain/SecretsDomain';

@Controller('secrets')
export default class Secrets {

  private secretsDomain: SecretsDomain;

  constructor() {
    this.secretsDomain = new SecretsDomain();
  }

  private getIdParam(req: Request): Number {
    return Number.parseInt(req.params.id);
  }

  private handlerError(e: Error, res: Response): Response {
    return res.status(500).json({ message: e.message });
  }

  @Post()
  public async newSecret(req: Request, res: Response): Promise<Response> {
    try {
      const { name, username, password } = req.body;

      const id = await this.secretsDomain.newSecret(name, username, password);

      return res.status(201).json({ idSecret: id });
    } catch (e) {
      return this.handlerError(e, res);
    }
  }

  @Get()
  public async getSecrets(req: Request, res: Response): Promise<Response> {
    try {
      const secrets = await this.secretsDomain.getAllSecrets();

      return res.json({ secrets });
    } catch (e) {
      return this.handlerError(e, res);
    }
  }

  @Get(':id')
  public async getSecretById(req: Request, res: Response): Promise<Response> {
    try {
      const id = this.getIdParam(req);
      const secret = await this.secretsDomain.getSecretById(id);

      return res.json({ secret });

    } catch (e) {
      return this.handlerError(e, res);
    }
  }

  @Put(':id')
  public async updateSecret(req: Request, res: Response): Promise<Response> {
    try {
      const id = this.getIdParam(req);
      const { name, username, password, active } = req.body;

      const secret = await this.secretsDomain.updateSecret(id, name, username, password, active);

      return res.status(200).json({ secret });
    } catch (e) {
      return this.handlerError(e, res);
    }
  }

  @Delete(':id')
  public async deleteSecret(req: Request, res: Response): Promise<Response> {
    try {
      const id = this.getIdParam(req);

      const success = await this.secretsDomain.inactiveSecrets(id);

      return res.status(200).json({ success });
    } catch (e) {
      return this.handlerError(e, res);
    }
  }
}

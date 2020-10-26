import { Request, Response } from 'express';
import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import SecretsDomain from '../domain/SecretsDomain';

@Controller('secrets')
export default class Secrets {

  @Post()
  public async newSecret(req: Request, res: Response): Promise<Response> {
    try {
      const { name, username, password } = req.body;

      const secretsDomain = new SecretsDomain();
      const id = await secretsDomain.newSecret(name, username, password);

      return res.status(201).json({ idSecret: id });
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  }

  @Get()
  public async getSecrets(req: Request, res: Response): Promise<Response> {
    try {
      const secretsDomain = new SecretsDomain();
      const secrets = await secretsDomain.getAllSecrets();

      return res.json({ secrets });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  @Get(':id')
  public async getSecretById(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number.parseInt(req.params.id);
      const secretsDomain = new SecretsDomain();

      const secret = await secretsDomain.getSecretById(id);

      return res.json({ secret });

    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  @Put(':id')
  public updateSecret(req: Request, res: Response): Response {
    return res.json({ message: `Hello ID ${req.params.id}` });
  }

  @Delete(':id')
  public deleteSecret(req: Request, res: Response): Response {
    return res.json({ message: `Hello ID ${req.params.id}` });
  }
}

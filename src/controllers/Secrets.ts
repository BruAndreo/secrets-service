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
  public async updateSecret(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number.parseInt(req.params.id);
      const { name, username, password, active } = req.body;

      const secretsDomain = new SecretsDomain();
      const secret = await secretsDomain.updateSecret(id, name, username, password, active);

      return res.status(200).json({ secret });
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  }

  @Delete(':id')
  public async deleteSecret(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number.parseInt(req.params.id);

      const secretsDomain = new SecretsDomain();
      const success = await secretsDomain.inactiveSecrets(id);

      return res.status(200).json({ success });
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  }
}

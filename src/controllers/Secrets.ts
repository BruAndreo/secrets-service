import { Request, Response } from 'express';
import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import { Certificates } from '../lib/Certificates';

@Controller('secrets')
export default class Secrets {

  @Post()
  public newSecret(req: Request, res: Response): Response {
    const certificates = new Certificates();

    const encrypt = certificates.crypt('brunolino2026@gmail.com');
    console.log(encrypt);

    const decrypt = certificates.decrypt(encrypt);
    console.log(decrypt);

    return res.json({ message: 'Hello Secrets' });
  }

  @Get()
  public getSecrets(req: Request, res: Response): Response {
    return res.json({ message: 'Hello Secrets GET' });
  }

  @Get(':id')
  public getSecretById(req: Request, res: Response): Response {
    return res.json({ message: `Hello ID ${req.params.id}` });
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

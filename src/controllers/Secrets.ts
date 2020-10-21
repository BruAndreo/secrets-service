import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';

@Controller('secrets')
export default class Secrets {

  @Post()
  public newSecret(req: Request, res: Response): Response {
    return res.json({ message: 'Hello Secrets' });
  }

  @Get()
  public getSecrets(req: Request, res: Response): Response {
    return res.json({ message: 'Hello Secrets GET' });
  }

}

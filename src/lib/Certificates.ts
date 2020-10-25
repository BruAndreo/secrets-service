import * as crypto from 'crypto';
import { Buffer } from 'buffer';
import fs from 'fs';
import EnvConfigs from './EnvConfigs';

export class Certificates {
  private publicKey: string;
  private privateKey: string;

  constructor() {
    const PUBLIC_KEY: string = EnvConfigs.getPublicKeyPath();
    const PRIVATE_KEY: string = EnvConfigs.getPrivateKeyPath();

    this.publicKey = this.readKey(PUBLIC_KEY);
    this.privateKey = this.readKey(PRIVATE_KEY);
  }

  public crypt(str: string): string {
    const encrypted = crypto.privateEncrypt(this.privateKey, Buffer.from(str));

    return encrypted.toString('base64');
  }

  public decrypt(data: string): string {
    const decrypted = crypto.publicDecrypt(this.publicKey, Buffer.from(data, 'base64'));

    return decrypted.toString('utf-8');
  }

  private readKey(key: string): string {
    return fs.readFileSync(key, 'utf-8');
  }

}

import * as crypto from 'crypto';
import { Buffer } from 'buffer';

export class Certificates {
  private publicKey: string = '../../certificates/id_rsa.pub';
  private privateKey: string = '../../certificates/id_rsa';


  public crypt(): string {
    const encrypted = crypto.privateEncrypt(this.privateKey, Buffer.from('Olá'));

    return encrypted.toString('base64');
  }

  public decrypt(data: string): string {
    const decrypted = crypto.publicDecrypt(this.publicKey, Buffer.from(data, 'base64'));

    return decrypted.toString('utf-8');
  }

}

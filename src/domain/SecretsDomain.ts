import { getCustomRepository } from "typeorm";
import { Certificates } from "../lib/Certificates";
import SecretsRepo from "../repositorys/SecretsRepo";

export default class SecretsDomain {

  public async newSecret(name: string,  username: string, password: string): Promise<Number> {
    if (!password) {
      throw new Error('Password not found');
    }

    const model = getCustomRepository(SecretsRepo);
    const certificates = new Certificates();

    const secret = model.create({
      name: name,
      login: certificates.crypt(username),
      password: certificates.crypt(password)
    });

    await model.save(secret);

    return secret.id;
  }

  public async getAllSecrets(): Promise<Object> {
    const model = getCustomRepository(SecretsRepo);
    const certificates = new Certificates();

    const secrets = await model.find();

    return secrets.map(secret => ({
      id: secret.id,
      username: certificates.decrypt(secret.login),
      createdAt: secret.createdAt
    }));
  }

  public async getSecretById(id: Number): Promise<Object> {
    const model = getCustomRepository(SecretsRepo);
    const certificates = new Certificates();

    const secret = await model.findOne({ id });

    if (!secret) {
      return {};
    }

    return {
      id: secret.id,
      username: certificates.decrypt(secret.login),
      password: certificates.decrypt(secret.password),
      active: secret.active,
      createdAt: secret.createdAt,
      updatedAt: secret.updatedAt
    };
  }

}

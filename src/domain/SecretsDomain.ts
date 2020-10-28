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

    const secrets = await model.find({ active: true });

    return secrets.map(secret => ({
      id: secret.id,
      name: secret.name,
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

  public async updateSecret(id: Number, name: string, username: string, password: string, active: boolean): Promise<Object> {
    const model = getCustomRepository(SecretsRepo);
    const certificates = new Certificates();

    let secret = await model.update({ id }, {
      name: name,
      login: certificates.crypt(username),
      password: certificates.crypt(password),
      active: active
    });

    if (!secret.affected) {
      throw new Error('Error on update secret');
    }

    return await this.getSecretById(id);
  }

  public async inactiveSecrets(id: Number): Promise<Boolean> {
    const model = getCustomRepository(SecretsRepo);

    const secret = await model.update({ id }, { active: false });

    return !!secret;
  }

}

export default class EnvConfigs {

  public static getAppPort(): Number {
    const port = process.env.APP_PORT || 3000;

    return Number(port);
  }

  public static getPublicKeyPath(): string {
    const publicKey: string | undefined = process.env.PUBLIC_KEY;

    if (!publicKey) {
      throw new Error('Configuration error');
    }

    return publicKey;
  }

  public static getPrivateKeyPath(): string {
    const privateKey: string | undefined = process.env.PRIVATE_KEY;

    if (!privateKey) {
      throw new Error('Configuration error');
    }

    return privateKey;
  }

}

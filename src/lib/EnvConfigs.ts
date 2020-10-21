export default class EnvConfigs {

  public static getAppPort(): Number {
    const port = process.env.APP_PORT || 3000;

    return Number(port);
  }

}

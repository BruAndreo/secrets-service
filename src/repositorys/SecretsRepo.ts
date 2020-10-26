import { EntityRepository, Repository } from "typeorm";
import Secrets from "../models/Secrets";

@EntityRepository(Secrets)
export default class SecretsRepo extends Repository<Secrets> {

}

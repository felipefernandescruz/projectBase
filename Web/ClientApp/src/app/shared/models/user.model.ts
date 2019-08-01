import { BaseModel } from "./base.model";
import { GenderEnum } from "../enum/gender.enum";
import { PronounEnum } from "../enum/pronun.enum";

export class UserModel extends BaseModel {
  name: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender?: GenderEnum;
  pronoun?: PronounEnum;
  customGender?: string;

  constructor() {
    super();
    this.name = "";
    this.lastName = "";
    this.email = "";
    this.dateOfBirth = "";
    this.gender = null;
    this.pronoun = null;
    this.customGender = null;
  }
}
